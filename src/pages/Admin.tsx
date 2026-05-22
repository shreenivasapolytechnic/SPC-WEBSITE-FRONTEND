import { FormEvent, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Activity,
  BarChart3,
  Bell,
  Clock3,
  Database,
  FileText,
  GraduationCap,
  Image as ImageIcon,
  ImagePlus,
  KeyRound,
  Loader2,
  LogIn,
  LogOut,
  Newspaper,
  PencilLine,
  Plus,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Trash2,
  UploadCloud,
  Users,
  X,
} from "lucide-react";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import {
  createFacultyItem,
  createGalleryItem,
  createNewsEventItem,
  createNoticeItem,
  createPlacementItem,
  createStudentLifeItem,
  deleteFacultyItem,
  deleteGalleryItem,
  deleteNewsEventItem,
  deleteNoticeItem,
  deletePlacementItem,
  deleteStudentLifeItem,
  FacultyItem,
  fetchFaculty,
  fetchGallery,
  fetchNewsEvents,
  fetchNotices,
  fetchPlacements,
  fetchStudentLife,
  GalleryItem,
  loginAdmin,
  NewsEventItem,
  NoticeItem,
  PlacementItem,
  resolveImageUrl,
  StudentLifeItem,
  updateFacultyItem,
  updateGalleryItem,
  updateNewsEventItem,
  updateNoticeItem,
  updatePlacementItem,
  updateStudentLifeItem,
} from "@/lib/api";
import {
  clearStoredAdminToken,
  getStoredAdminToken,
  setStoredAdminToken,
} from "@/lib/auth";

type FieldType = "text" | "textarea" | "number" | "date" | "checkbox" | "select" | "file";
type FormValue = string | boolean | File | null;
type TransportRouteForm = {
  busNumber: string;
  routeName: string;
  stops: string;
};
type FormState = Record<string, FormValue | TransportRouteForm[]>;

type AdminRecord = {
  _id: string;
  imageUrl?: string;
  [key: string]: unknown;
};

type FieldConfig = {
  name: string;
  label: string;
  type: FieldType | "transport-routes";
  required?: boolean;
  options?: string[];
  showWhen?: (form: FormState) => boolean;
  getValue?: (item: AdminRecord) => FormValue;
};

type ModuleConfig<T extends AdminRecord> = {
  key: string;
  title: string;
  description: string;
  imageRequired?: boolean;
  fields: FieldConfig[];
  queryFn: () => Promise<{ data: T[] }>;
  createFn: (token: string, payload: FormState) => Promise<unknown>;
  updateFn: (token: string, id: string, payload: FormState) => Promise<unknown>;
  deleteFn: (token: string, id: string) => Promise<unknown>;
  getTitle: (item: T) => string;
  getSubtitle: (item: T) => string;
  transformPayload?: (payload: FormState) => FormState;
};

const adminShell =
  "rounded-lg border border-slate-200 bg-white shadow-sm";
const softInput =
  "rounded-md border-slate-300 bg-white shadow-none focus-visible:ring-2 focus-visible:ring-blue-500/30";

const moduleIcons = {
  gallery: ImageIcon,
  "news-events": Newspaper,
  notices: Bell,
  faculty: GraduationCap,
  "student-life": Users,
  placements: BarChart3,
};

type PlacementCompanyForm = {
  company: string;
  count: string;
};

type PlacementRecordForm = {
  branch: string;
  studentStrength: string;
  placedQty: string;
  displayOrder: string;
  companies: PlacementCompanyForm[];
};

type PlacementForm = {
  academicYear: string;
  records: PlacementRecordForm[];
};

const createEmptyForm = (fields: FieldConfig[]) =>
  fields.reduce<FormState>((form, field) => {
    form[field.name] = field.type === "checkbox" ? false : null;
    return form;
  }, {});

const normalizeForInput = (value: unknown, field: FieldConfig): FormValue => {
  if (field.type === "checkbox") return Boolean(value);
  if (field.type === "file") return null;
  if (field.type === "date" && typeof value === "string") return value.slice(0, 10);
  if (value === undefined || value === null) return "";
  return String(value);
};

const buildEditForm = <T extends AdminRecord>(item: T, fields: FieldConfig[]) =>
  fields.reduce<FormState>((form, field) => {
    form[field.name] = field.getValue
      ? field.getValue(item)
      : normalizeForInput(item[field.name], field);
    return form;
  }, {});

const hasFile = (value: FormValue): value is File => value instanceof File;

const studentLifeCategories = ["clubs", "sports", "cultural", "hostel", "transport"];
const departmentCodes = ["MECH", "AUTO", "EEE", "ECE", "CSE", "AIML"];
const galleryCategories = [
  "gallery",
  "placement",
  "MECH",
  "AUTO",
  "EEE",
  "ECE",
  "CSE",
  "AIML",
];

const isTransportForm = (form: FormState) => form.category === "transport";
const isNotTransportForm = (form: FormState) => form.category !== "transport";

const getAdditionalRoutes = (item: AdminRecord) => {
  const content = (item as StudentLifeItem).additionalContent;
  return Array.isArray(content?.routes)
    ? content.routes.map((route) => ({
        busNumber: route.busNumber || "",
        routeName: route.routeName || "",
        stops: Array.isArray(route.stops) ? route.stops.join("\n") : "",
      }))
    : [{ busNumber: "", routeName: "", stops: "" }];
};

const transformStudentLifePayload = (payload: FormState) => {
  const { routes, ...rest } = payload;
  const transformed: FormState = { ...rest };

  if (payload.category === "transport") {
    delete transformed.image;
    transformed.additionalContent = JSON.stringify({
      routes: Array.isArray(routes)
        ? routes
            .map((route) => ({
              busNumber: route.busNumber.trim(),
              routeName: route.routeName.trim(),
              stops: route.stops
                .split("\n")
                .map((stop) => stop.trim())
                .filter(Boolean),
            }))
            .filter((route) => route.busNumber && route.routeName)
        : [],
    });
  }
  return transformed;
};

const transformHodPayload = (payload: FormState) => ({
  name: payload.name,
  department: payload.department,
  designation: "HOD",
});

const transformNewsEventPayload = (payload: FormState) => ({
  title: payload.title,
  description: payload.description,
  category: "news",
});

const emptyPlacementRecord = (): PlacementRecordForm => ({
  branch: "",
  studentStrength: "",
  placedQty: "",
  displayOrder: "",
  companies: [{ company: "", count: "" }],
});

const emptyPlacementForm = (): PlacementForm => ({
  academicYear: "",
  records: [emptyPlacementRecord()],
});

const toPlacementForm = (placement: PlacementItem): PlacementForm => ({
  academicYear: placement.academicYear,
  records: placement.records.length
    ? placement.records.map((record) => ({
        branch: record.branch,
        studentStrength: String(record.studentStrength),
        placedQty: String(record.placedQty),
        displayOrder: String(record.displayOrder),
        companies: record.companies.length
          ? record.companies.map((company) => ({
              company: company.company,
              count: String(company.count),
            }))
          : [{ company: "", count: "" }],
      }))
    : [emptyPlacementRecord()],
});

const toPlacementPayload = (form: PlacementForm) => ({
  academicYear: form.academicYear.trim(),
  records: form.records
    .filter((record) => record.branch.trim())
    .map((record, index) => ({
      branch: record.branch.trim(),
      studentStrength: Number(record.studentStrength || 0),
      placedQty: Number(record.placedQty || 0),
      displayOrder: Number(record.displayOrder || index + 1),
      companies: record.companies
        .filter((company) => company.company.trim())
        .map((company) => ({
          company: company.company.trim(),
          count: Number(company.count || 0),
        })),
    })),
});

const AdminModule = <T extends AdminRecord>({
  config,
  token,
}: {
  config: ModuleConfig<T>;
  token: string;
}) => {
  const queryClient = useQueryClient();
  const [createForm, setCreateForm] = useState<FormState>(() =>
    createEmptyForm(config.fields)
  );
  const [editingItem, setEditingItem] = useState<T | null>(null);
  const [editForm, setEditForm] = useState<FormState>(() =>
    createEmptyForm(config.fields)
  );

  const query = useQuery({
    queryKey: [config.key],
    queryFn: config.queryFn,
  });

  const createMutation = useMutation({
    mutationFn: () =>
      config.createFn(token, config.transformPayload?.(createForm) || createForm),
    onSuccess: () => {
      setCreateForm(createEmptyForm(config.fields));
      queryClient.invalidateQueries({ queryKey: [config.key] });
      toast.success(`${config.title} record created`);
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const updateMutation = useMutation({
    mutationFn: () => {
      if (!editingItem) throw new Error("No record selected");
      return config.updateFn(
        token,
        editingItem._id,
        config.transformPayload?.(editForm) || editForm
      );
    },
    onSuccess: () => {
      setEditingItem(null);
      setEditForm(createEmptyForm(config.fields));
      queryClient.invalidateQueries({ queryKey: [config.key] });
      toast.success(`${config.title} record updated`);
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => config.deleteFn(token, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [config.key] });
      toast.success(`${config.title} record deleted`);
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const setFormValue = (
    setter: React.Dispatch<React.SetStateAction<FormState>>,
    name: string,
    value: FormValue
  ) => setter((current) => ({ ...current, [name]: value }));

  const renderField = (
    field: FieldConfig,
    form: FormState,
    setter: React.Dispatch<React.SetStateAction<FormState>>,
    idPrefix: string
  ) => {
    const id = `${idPrefix}-${config.key}-${field.name}`;
    const value = form[field.name];

    if (field.showWhen && !field.showWhen(form)) {
      return null;
    }

    if (field.type === "textarea") {
      return (
        <div className="space-y-1.5" key={field.name}>
          <Label htmlFor={id} className="text-xs font-semibold uppercase tracking-wide text-slate-500">{field.label}</Label>
          <Textarea
            id={id}
            className={`${softInput} min-h-24`}
            value={typeof value === "string" ? value : ""}
            onChange={(event) => setFormValue(setter, field.name, event.target.value)}
            required={field.required}
          />
        </div>
      );
    }

    if (field.type === "select") {
      return (
        <div className="space-y-1.5" key={field.name}>
          <Label htmlFor={id} className="text-xs font-semibold uppercase tracking-wide text-slate-500">{field.label}</Label>
          <Select
            value={typeof value === "string" ? value : ""}
            onValueChange={(selected) => setFormValue(setter, field.name, selected)}
          >
            <SelectTrigger id={id} className={softInput}>
              <SelectValue placeholder={field.label} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    }

    if (field.type === "checkbox") {
      return (
        <div className="flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 p-3" key={field.name}>
          <Checkbox
            id={id}
            checked={Boolean(value)}
            onCheckedChange={(checked) =>
              setFormValue(setter, field.name, Boolean(checked))
            }
          />
          <Label htmlFor={id} className="text-sm font-medium">{field.label}</Label>
        </div>
      );
    }

    if (field.type === "transport-routes") {
      const routes = Array.isArray(value)
        ? (value as TransportRouteForm[])
        : [{ busNumber: "", routeName: "", stops: "" }];

      const updateRoute = (index: number, patch: Partial<TransportRouteForm>) => {
        const nextRoutes = routes.map((route, routeIndex) =>
          routeIndex === index ? { ...route, ...patch } : route
        );
        setFormValue(setter, field.name, nextRoutes);
      };

      return (
        <div className="space-y-2" key={field.name}>
          <Label className="text-xs font-semibold uppercase tracking-wide text-slate-500">{field.label}</Label>
          {routes.map((route, index) => (
            <div key={index} className="space-y-3 rounded-md border border-slate-200 bg-slate-50 p-3">
              <div className="grid gap-3 sm:grid-cols-[120px,minmax(0,1fr)]">
                <Input
                  className={softInput}
                  placeholder="Bus No"
                  value={route.busNumber}
                  onChange={(event) =>
                    updateRoute(index, { busNumber: event.target.value })
                  }
                />
                <Input
                  className={softInput}
                  placeholder="Route Name"
                  value={route.routeName}
                  onChange={(event) =>
                    updateRoute(index, { routeName: event.target.value })
                  }
                />
              </div>
              <Textarea
                className={`${softInput} min-h-24`}
                placeholder="Enter one stop per line"
                value={route.stops}
                onChange={(event) => updateRoute(index, { stops: event.target.value })}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={routes.length === 1}
                onClick={() =>
                  setFormValue(
                    setter,
                    field.name,
                    routes.filter((_, routeIndex) => routeIndex !== index)
                  )
                }
              >
                <Trash2 />
                Remove Route
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() =>
              setFormValue(setter, field.name, [
                ...routes,
                { busNumber: "", routeName: "", stops: "" },
              ])
            }
          >
            <Plus />
            Add Bus Route
          </Button>
        </div>
      );
    }

    if (field.type === "file") {
      return (
        <div className="space-y-1.5" key={field.name}>
          <Label htmlFor={id} className="text-xs font-semibold uppercase tracking-wide text-slate-500">{field.label}</Label>
          <label
            htmlFor={id}
            className="group flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 p-4 text-center transition-colors hover:border-blue-400 hover:bg-blue-50/50"
          >
            <UploadCloud className="mb-2 h-7 w-7 text-blue-600" />
            <span className="text-sm font-semibold text-slate-800">
              {hasFile(value as FormValue) ? (value as File).name : "Drop image here or browse"}
            </span>
            <span className="mt-1 text-xs text-slate-500">PNG, JPG, or WEBP images</span>
          </label>
          <Input
            id={id}
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(event) =>
              setFormValue(setter, field.name, event.target.files?.[0] || null)
            }
            required={field.required}
          />
        </div>
      );
    }

    return (
        <div className="space-y-1.5" key={field.name}>
        <Label htmlFor={id} className="text-xs font-semibold uppercase tracking-wide text-slate-500">{field.label}</Label>
        <Input
          id={id}
          className={softInput}
          type={field.type}
          value={typeof value === "string" ? value : ""}
          onChange={(event) => setFormValue(setter, field.name, event.target.value)}
          required={field.required}
        />
      </div>
    );
  };

  const handleCreate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!token) {
      toast.error("Please log in first");
      return;
    }

    if (config.imageRequired && !hasFile(createForm.image)) {
      toast.error("Please choose an image");
      return;
    }

    createMutation.mutate();
  };

  const records = [...(query.data?.data || [])].sort((a, b) => {
    const aTime = typeof a.createdAt === "string" ? new Date(a.createdAt).getTime() : 0;
    const bTime = typeof b.createdAt === "string" ? new Date(b.createdAt).getTime() : 0;
    return bTime - aTime;
  });
  const isBusy =
    createMutation.isPending || updateMutation.isPending || deleteMutation.isPending;

  const ModuleIcon = moduleIcons[config.key as keyof typeof moduleIcons] || Database;

  return (
    <div className="grid gap-5 lg:grid-cols-[340px,minmax(0,1fr)]">
      <Card className={`${adminShell} lg:sticky lg:top-24 lg:self-start`}>
        <CardHeader className="p-5">
          <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 text-white">
            <ModuleIcon className="h-5 w-5" />
          </div>
          <CardTitle className="text-lg">Add {config.title}</CardTitle>
          <CardDescription>{config.description}</CardDescription>
        </CardHeader>
        <CardContent className="p-5 pt-0">
          <form className="space-y-3" onSubmit={handleCreate}>
            {config.fields.map((field) =>
              renderField(field, createForm, setCreateForm, "create")
            )}
            <Button
              type="submit"
              className="w-full rounded-md bg-blue-600 hover:bg-blue-700"
              disabled={!token || createMutation.isPending}
            >
              {createMutation.isPending ? (
                <Loader2 className="animate-spin" />
              ) : (
                <ImagePlus />
              )}
              Save
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className={adminShell}>
        <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0 p-5">
          <div className="space-y-1.5">
            <CardTitle className="text-lg">{config.title} Records</CardTitle>
            <CardDescription>{records.length} records loaded</CardDescription>
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="rounded-md"
            onClick={() => query.refetch()}
            disabled={query.isFetching}
          >
            <RefreshCw className={query.isFetching ? "animate-spin" : ""} />
          </Button>
        </CardHeader>
        <CardContent className="p-5 pt-0">
          {query.isLoading ? (
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Loader2 className="animate-spin" />
              Loading records...
            </div>
          ) : query.isError ? (
            <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
              {(query.error as Error).message}
            </div>
          ) : records.length ? (
            <div className="divide-y rounded-md border border-slate-200">
              {records.map((item) => (
                <article
                  key={item._id}
                  className="flex items-center gap-3 bg-white p-3 transition-colors hover:bg-slate-50"
                >
                  {item.imageUrl ? (
                    <div className="h-14 w-20 shrink-0 overflow-hidden rounded-md border border-slate-200 bg-slate-100">
                      <img
                        src={resolveImageUrl(item.imageUrl)}
                        alt={config.getTitle(item)}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-400">
                      <FileText className="h-4 w-4" />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-semibold text-slate-950">
                        {config.getTitle(item)}
                      </h3>
                      <p className="mt-1 inline-flex rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                        {config.getSubtitle(item)}
                      </p>
                  </div>
                    <div className="flex shrink-0 gap-2">
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        className="h-9 w-9 rounded-md"
                        disabled={!token || isBusy}
                        onClick={() => {
                          setEditingItem(item);
                          setEditForm(buildEditForm(item, config.fields));
                        }}
                      >
                        <PencilLine className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        size="icon"
                        variant="destructive"
                        className="h-9 w-9 rounded-md"
                        disabled={!token || isBusy}
                        onClick={() => deleteMutation.mutate(item._id)}
                      >
                        {deleteMutation.isPending ? (
                          <Loader2 className="animate-spin" />
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-md border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-white text-slate-500">
                <FileText />
              </div>
              <h3 className="font-semibold text-slate-900">No records yet</h3>
              <p className="mt-1 text-sm text-slate-500">Create the first {config.title.toLowerCase()} record from the panel.</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog
        open={Boolean(editingItem)}
        onOpenChange={(open) => {
          if (!open) {
            setEditingItem(null);
            setEditForm(createEmptyForm(config.fields));
          }
        }}
      >
        <DialogContent className="max-h-[90vh] overflow-y-auto rounded-lg bg-white p-0 shadow-xl sm:max-w-2xl">
          <div className="sticky top-0 z-10 border-b bg-white p-5">
          <DialogHeader>
            <DialogTitle>Edit {config.title}</DialogTitle>
            <DialogDescription>Update the selected record.</DialogDescription>
          </DialogHeader>
          </div>
          <form
            className="space-y-3 p-5"
            onSubmit={(event) => {
              event.preventDefault();
              updateMutation.mutate();
            }}
          >
            {config.fields.map((field) =>
              renderField(
                { ...field, required: false },
                editForm,
                setEditForm,
                "edit"
              )
            )}
            <Button
              type="submit"
              className="sticky bottom-0 w-full rounded-md bg-blue-600 hover:bg-blue-700"
              disabled={!token || updateMutation.isPending}
            >
              {updateMutation.isPending ? (
                <Loader2 className="animate-spin" />
              ) : (
                <PencilLine />
              )}
              Save Changes
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const PlacementAdmin = ({ token }: { token: string }) => {
  const queryClient = useQueryClient();
  const [form, setForm] = useState<PlacementForm>(() => emptyPlacementForm());
  const [editingYear, setEditingYear] = useState<string | null>(null);

  const query = useQuery({
    queryKey: ["placements"],
    queryFn: fetchPlacements,
  });

  const resetForm = () => {
    setForm(emptyPlacementForm());
    setEditingYear(null);
  };

  const saveMutation = useMutation({
    mutationFn: () => {
      if (!token) throw new Error("Please log in first");
      const payload = toPlacementPayload(form);
      return editingYear
        ? updatePlacementItem(token, editingYear, payload)
        : createPlacementItem(token, payload);
    },
    onSuccess: () => {
      resetForm();
      queryClient.invalidateQueries({ queryKey: ["placements"] });
      toast.success("Placement year saved");
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const deleteMutation = useMutation({
    mutationFn: (academicYear: string) => deletePlacementItem(token, academicYear),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["placements"] });
      toast.success("Placement year deleted");
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const updateRecord = (
    recordIndex: number,
    patch: Partial<PlacementRecordForm>
  ) => {
    setForm((current) => ({
      ...current,
      records: current.records.map((record, index) =>
        index === recordIndex ? { ...record, ...patch } : record
      ),
    }));
  };

  const updateCompany = (
    recordIndex: number,
    companyIndex: number,
    patch: Partial<PlacementCompanyForm>
  ) => {
    setForm((current) => ({
      ...current,
      records: current.records.map((record, index) =>
        index === recordIndex
          ? {
              ...record,
              companies: record.companies.map((company, nestedIndex) =>
                nestedIndex === companyIndex ? { ...company, ...patch } : company
              ),
            }
          : record
      ),
    }));
  };

  const addCompany = (recordIndex: number) => {
    setForm((current) => ({
      ...current,
      records: current.records.map((record, index) =>
        index === recordIndex
          ? { ...record, companies: [...record.companies, { company: "", count: "" }] }
          : record
      ),
    }));
  };

  const removeCompany = (recordIndex: number, companyIndex: number) => {
    setForm((current) => ({
      ...current,
      records: current.records.map((record, index) =>
        index === recordIndex
          ? {
              ...record,
              companies: record.companies.filter((_, nestedIndex) => nestedIndex !== companyIndex),
            }
          : record
      ),
    }));
  };

  const removeRecord = (recordIndex: number) => {
    setForm((current) => ({
      ...current,
      records: current.records.filter((_, index) => index !== recordIndex),
    }));
  };

  const placements = query.data?.data || [];
  const totalBranches = placements.reduce((sum, placement) => sum + placement.records.length, 0);
  const totalPlaced = placements.reduce(
    (sum, placement) =>
      sum + placement.records.reduce((inner, record) => inner + Number(record.placedQty || 0), 0),
    0
  );
  const totalStrength = placements.reduce(
    (sum, placement) =>
      sum + placement.records.reduce((inner, record) => inner + Number(record.studentStrength || 0), 0),
    0
  );
  const placementRate = totalStrength ? Math.round((totalPlaced / totalStrength) * 100) : 0;

  return (
    <div className="grid gap-5 lg:grid-cols-[380px,minmax(0,1fr)]">
      <Card className={`${adminShell} lg:sticky lg:top-24 lg:self-start`}>
        <CardHeader className="p-5">
          <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-md bg-emerald-600 text-white">
            <BarChart3 className="h-5 w-5" />
          </div>
          <CardTitle className="text-lg">
            {editingYear ? `Edit ${editingYear}` : "Add Placement Year"}
          </CardTitle>
          <CardDescription>
            Create year-wise branch placement statistics with dynamic companies.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-5 pt-0">
          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              saveMutation.mutate();
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="placement-year">Academic Year</Label>
              <Input
                id="placement-year"
                className={softInput}
                placeholder="2024-2025"
                value={form.academicYear}
                onChange={(event) =>
                  setForm((current) => ({ ...current, academicYear: event.target.value }))
                }
                required
              />
            </div>

            <div className="space-y-4">
              {form.records.map((record, recordIndex) => (
                <div key={recordIndex} className="space-y-4 rounded-md border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">Department Row {recordIndex + 1}</h3>
                      <p className="text-xs text-slate-500">
                        {Number(record.studentStrength) ? `${Math.round((Number(record.placedQty || 0) / Number(record.studentStrength)) * 100)}% placed` : "Add strength to calculate rate"}
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeRecord(recordIndex)}
                      disabled={form.records.length === 1}
                    >
                      <X />
                    </Button>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Branch</Label>
                      <Input
                        className={softInput}
                        placeholder="MECH ENGG"
                        value={record.branch}
                        onChange={(event) =>
                          updateRecord(recordIndex, { branch: event.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Display Order</Label>
                      <Input
                        className={softInput}
                        type="number"
                        value={record.displayOrder}
                        onChange={(event) =>
                          updateRecord(recordIndex, { displayOrder: event.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Student Strength</Label>
                      <Input
                        className={softInput}
                        type="number"
                        value={record.studentStrength}
                        onChange={(event) =>
                          updateRecord(recordIndex, { studentStrength: event.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Placed Qty</Label>
                      <Input
                        className={softInput}
                        type="number"
                        value={record.placedQty}
                        onChange={(event) =>
                          updateRecord(recordIndex, { placedQty: event.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Companies</Label>
                    {record.companies.map((company, companyIndex) => (
                      <div key={companyIndex} className="flex gap-2 rounded-md bg-white p-2">
                        <Input
                          className={softInput}
                          placeholder="TEL"
                          value={company.company}
                          onChange={(event) =>
                            updateCompany(recordIndex, companyIndex, {
                              company: event.target.value,
                            })
                          }
                        />
                        <Input
                          className={`${softInput} w-28`}
                          type="number"
                          placeholder="25"
                          value={company.count}
                          onChange={(event) =>
                            updateCompany(recordIndex, companyIndex, {
                              count: event.target.value,
                            })
                          }
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => removeCompany(recordIndex, companyIndex)}
                        >
                          <X />
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => addCompany(recordIndex)}
                    >
                      <Plus />
                      Add Company
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={() =>
                setForm((current) => ({
                  ...current,
                  records: [...current.records, emptyPlacementRecord()],
                }))
              }
            >
              <Plus />
              Add Department Row
            </Button>

            <div className="flex gap-3">
              <Button type="submit" className="flex-1" disabled={!token || saveMutation.isPending}>
                {saveMutation.isPending ? <Loader2 className="animate-spin" /> : <PencilLine />}
                Save Placement Year
              </Button>
              {editingYear ? (
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              ) : null}
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className={adminShell}>
        <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0 p-5">
          <div className="space-y-1.5">
            <CardTitle className="text-lg">Placement Years</CardTitle>
            <CardDescription>{placements.length} years loaded</CardDescription>
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="rounded-md"
            onClick={() => query.refetch()}
            disabled={query.isFetching}
          >
            <RefreshCw className={query.isFetching ? "animate-spin" : ""} />
          </Button>
        </CardHeader>
        <CardContent className="p-5 pt-0">
          <div className="mb-5 grid gap-3 sm:grid-cols-3">
            {[
              ["Years", placements.length],
              ["Branches", totalBranches],
              ["Placed", totalPlaced],
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border border-slate-200 bg-white p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
                <p className="mt-1 text-2xl font-bold text-slate-950">{value}</p>
              </div>
            ))}
            <div className="rounded-md border border-emerald-200 bg-emerald-50 p-3 sm:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Overall Placement Rate</p>
              <p className="mt-1 text-3xl font-bold text-emerald-700">{placementRate}%</p>
            </div>
          </div>
          {query.isLoading ? (
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Loader2 className="animate-spin" />
              Loading placement years...
            </div>
          ) : placements.length ? (
            <div className="space-y-4">
              {placements.map((placement) => (
                <article key={placement._id} className="rounded-md border border-slate-200 bg-white p-4 transition-colors hover:bg-slate-50">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-semibold">{placement.academicYear}</h3>
                      <p className="text-sm text-muted-foreground">
                        {placement.records.length} department rows
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {placement.records.slice(0, 5).map((record) => (
                          <span key={record.branch} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                            {record.branch}: {record.placedQty}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        className="rounded-md"
                        onClick={() => {
                          setEditingYear(placement.academicYear);
                          setForm(toPlacementForm(placement));
                        }}
                      >
                        <PencilLine className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        size="icon"
                        variant="destructive"
                        className="rounded-md"
                        disabled={!token || deleteMutation.isPending}
                        onClick={() => deleteMutation.mutate(placement.academicYear)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-md border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-white text-emerald-600">
                <BarChart3 />
              </div>
              <h3 className="font-semibold text-slate-900">No placement years yet</h3>
              <p className="mt-1 text-sm text-slate-500">Add a year to build the placement dashboard.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const Admin = () => {
  const [token, setToken] = useState(() => getStoredAdminToken() || "");
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const modules = useMemo<ModuleConfig<AdminRecord>[]>(
    () => [
      {
        key: "gallery",
        title: "Gallery",
        description: "Manage campus gallery images.",
        imageRequired: true,
        fields: [
          { name: "title", label: "Title", type: "text", required: true },
          {
            name: "category",
            label: "Category",
            type: "select",
            required: true,
            options: galleryCategories,
          },
          { name: "image", label: "Image", type: "file", required: true },
        ],
        queryFn: fetchGallery,
        createFn: createGalleryItem,
        updateFn: updateGalleryItem,
        deleteFn: deleteGalleryItem,
        getTitle: (item) => (item as GalleryItem).title,
        getSubtitle: (item) => (item as GalleryItem).category,
      },
      {
        key: "news-events",
        title: "News & Events",
        description: "Manage public news and event posts.",
        fields: [
          { name: "title", label: "Title", type: "text", required: true },
          { name: "description", label: "Details", type: "textarea", required: true },
        ],
        queryFn: fetchNewsEvents,
        createFn: createNewsEventItem,
        updateFn: updateNewsEventItem,
        deleteFn: deleteNewsEventItem,
        transformPayload: transformNewsEventPayload,
        getTitle: (item) => (item as NewsEventItem).title,
        getSubtitle: () => "News & Events",
      },
      {
        key: "notices",
        title: "Notices",
        description: "Manage college notices and circulars.",
        fields: [
          { name: "title", label: "Notice Title", type: "text", required: true },
          { name: "description", label: "Notice Summary", type: "textarea", required: true },
          { name: "pdfLink", label: "Notice PDF Link", type: "text" },
          { name: "publishedAt", label: "Notice Date", type: "date" },
          { name: "isPinned", label: "Show as Important", type: "checkbox" },
        ],
        queryFn: fetchNotices,
        createFn: createNoticeItem,
        updateFn: updateNoticeItem,
        deleteFn: deleteNoticeItem,
        getTitle: (item) => (item as NoticeItem).title,
        getSubtitle: (item) => (item as NoticeItem).isPinned ? "Pinned" : "Notice",
      },
      {
        key: "faculty",
        title: "HOD Names",
        description: "Update the HOD name shown on department cards.",
        fields: [
          { name: "name", label: "HOD Name", type: "text", required: true },
          {
            name: "department",
            label: "Department",
            type: "select",
            required: true,
            options: departmentCodes,
          },
        ],
        queryFn: fetchFaculty,
        createFn: createFacultyItem,
        updateFn: updateFacultyItem,
        deleteFn: deleteFacultyItem,
        transformPayload: transformHodPayload,
        getTitle: (item) => (item as FacultyItem).name,
        getSubtitle: (item) => `HOD - ${(item as FacultyItem).department}`,
      },
      {
        key: "student-life",
        title: "Student Life",
        description: "Manage clubs, sports, cultural events, hostel, and transport.",
        fields: [
          {
            name: "category",
            label: "Category",
            type: "select",
            required: true,
            options: studentLifeCategories,
          },
          {
            name: "image",
            label: "Upload Image",
            type: "file",
            showWhen: isNotTransportForm,
          },
          { name: "title", label: "Image Name", type: "text", required: true },
          { name: "description", label: "Description", type: "textarea", required: true },
          {
            name: "routes",
            label: "Bus Routes",
            type: "transport-routes",
            showWhen: isTransportForm,
            getValue: getAdditionalRoutes,
          },
        ],
        queryFn: () => fetchStudentLife(),
        createFn: createStudentLifeItem,
        updateFn: updateStudentLifeItem,
        deleteFn: deleteStudentLifeItem,
        transformPayload: transformStudentLifePayload,
        getTitle: (item) => (item as StudentLifeItem).title,
        getSubtitle: (item) => {
          const studentLifeItem = item as StudentLifeItem;
          return studentLifeItem.category === "transport"
            ? `${studentLifeItem.additionalContent?.routes?.length || 0} routes`
            : studentLifeItem.category;
        },
      },
    ],
    []
  );

  const loginMutation = useMutation({
    mutationFn: () => loginAdmin(credentials.email, credentials.password),
    onSuccess: (response) => {
      setStoredAdminToken(response.token);
      setToken(response.token);
      toast.success(`Signed in as ${response.user.email}`);
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginMutation.mutate();
  };

  const handleLogout = () => {
    clearStoredAdminToken();
    setToken("");
    toast.success("Signed out");
  };

  return (
    <PageLayout title="Admin" subtitle="Manage dynamic website content" hideHeader>
      <section className="mb-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1fr,360px] lg:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              {token ? "Secure session active" : "Secure admin access"}
            </div>
            <h1 className="text-3xl font-bold tracking-normal text-slate-950 md:text-4xl">
              Content Management Dashboard
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Manage gallery, notices, news, student life, HOD updates, and placements.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              ["Modules", modules.length + 1, Database],
              ["Session", token ? "Active" : "Locked", Activity],
              ["Records", "Live", Sparkles],
              ["Updated", "Now", Clock3],
            ].map(([label, value, Icon]) => (
              <div key={String(label)} className="rounded-md border border-slate-200 bg-slate-50 p-3">
                <Icon className="mb-2 h-4 w-4 text-blue-600" />
                <p className="text-xl font-bold text-slate-950">{value}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mb-5 grid gap-5 lg:grid-cols-[minmax(0,1fr),300px]">
        <Card className={adminShell}>
          <CardHeader className="p-5">
            <CardTitle className="flex items-center gap-2 text-lg">
              <KeyRound className="h-5 w-5 text-blue-600" />
              Admin Login
            </CardTitle>
            <CardDescription>
              Sign in to unlock protected content actions.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-5 pt-0">
            <form className="grid gap-3 md:grid-cols-[1fr,1fr,auto] md:items-end" onSubmit={handleLogin}>
              <div className="space-y-1.5">
                <Label htmlFor="admin-email" className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email</Label>
                <Input
                  id="admin-email"
                  type="email"
                  className={softInput}
                  value={credentials.email}
                  onChange={(event) =>
                    setCredentials((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="admin-password" className="text-xs font-semibold uppercase tracking-wide text-slate-500">Password</Label>
                <Input
                  id="admin-password"
                  type="password"
                  className={softInput}
                  value={credentials.password}
                  onChange={(event) =>
                    setCredentials((current) => ({
                      ...current,
                      password: event.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="rounded-md bg-blue-600 hover:bg-blue-700"
                  disabled={loginMutation.isPending}
                >
                  {loginMutation.isPending ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <LogIn />
                  )}
                  Login
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-md"
                  disabled={!token}
                  onClick={handleLogout}
                >
                  <LogOut />
                  Logout
                </Button>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-slate-50 px-3 py-2 text-xs text-slate-500 md:col-span-3">
                <span className={`h-2 w-2 rounded-full ${token ? "bg-emerald-500" : "bg-slate-300"}`} />
                {token ? "Remembered session is active in this browser" : "Session unlocks after login"}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="gallery" className="space-y-5">
        <div className="sticky top-20 z-20 -mx-4 border-y border-slate-200 bg-background/95 px-4 py-2 md:top-24">
        <TabsList className="flex h-auto justify-start gap-1 overflow-x-auto rounded-md border border-slate-200 bg-white p-1 shadow-none">
          {modules.map((module) => (
            <TabsTrigger
              key={module.key}
              value={module.key}
              className="gap-2 rounded px-3 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              {(() => {
                const Icon = moduleIcons[module.key as keyof typeof moduleIcons] || Database;
                return <Icon className="h-4 w-4" />;
              })()}
              {module.title}
            </TabsTrigger>
          ))}
          <TabsTrigger
            value="placements"
            className="gap-2 rounded px-3 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <BarChart3 className="h-4 w-4" />
            Placements
          </TabsTrigger>
        </TabsList>
        </div>
        {modules.map((module) => (
          <TabsContent key={module.key} value={module.key}>
            <AdminModule config={module} token={token} />
          </TabsContent>
        ))}
        <TabsContent value="placements">
          <PlacementAdmin token={token} />
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default Admin;
