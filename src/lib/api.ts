import axios, { AxiosError } from "axios";

export interface GalleryItem {
  _id: string;
  title: string;
  imageUrl: string;
  publicId?: string | null;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewsEventItem {
  _id: string;
  title: string;
  description: string;
  category: "news" | "event";
  imageUrl: string;
  publicId?: string | null;
  pdfLink: string;
  isPinned: boolean;
  eventDate?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface NoticeItem {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  publicId?: string | null;
  pdfLink: string;
  isPinned: boolean;
  publishedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface FacultyItem {
  _id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  email: string;
  phone: string;
  imageUrl: string;
  publicId?: string | null;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface PlacementItem {
  _id: string;
  academicYear: string;
  records: {
    branch: string;
    studentStrength: number;
    companies: {
      company: string;
      count: number;
    }[];
    placedQty: number;
    displayOrder: number;
  }[];
  createdAt: string;
  updatedAt: string;
}

export interface StudentLifeItem {
  _id: string;
  title: string;
  description: string;
  category: "clubs" | "sports" | "cultural" | "hostel" | "transport";
  imageUrl: string;
  publicId?: string | null;
  additionalContent?: {
    routes?: {
      busNumber: string;
      routeName: string;
      stops: string[];
    }[];
    [key: string]: unknown;
  } | null;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

interface ListResponse<T> {
  success: boolean;
  count: number;
  data: T[];
}

interface ItemResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

interface LoginResponse {
  success: boolean;
  token: string;
  userId: string;
  user: {
    _id: string;
    name: string;
    email: string;
    role: string;
  };
}

interface ImagePayload {
  image?: File | null;
  [key: string]: string | number | boolean | File | null | undefined;
}

const rawApiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";
export const apiBaseUrl = rawApiBaseUrl.replace(/\/+$/, "");
const backendOrigin = apiBaseUrl.replace(/\/api$/, "");

const apiClient = axios.create({
  baseURL: apiBaseUrl,
});

const getErrorMessage = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ message?: string }>;
    return (
      axiosError.response?.data?.message ||
      axiosError.message ||
      "Request failed"
    );
  }

  return error instanceof Error ? error.message : "Request failed";
};

const authHeaders = (token?: string) =>
  token ? { Authorization: `Bearer ${token}` } : undefined;

const request = async <T>(callback: () => Promise<{ data: T }>) => {
  try {
    const response = await callback();
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

const toFormData = (payload: ImagePayload) => {
  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;
    if (key === "image" && value instanceof File) {
      formData.append(key, value);
      return;
    }
    if (key !== "image") {
      formData.append(key, String(value));
    }
  });

  return formData;
};

const list = <T>(path: string) =>
  request<ListResponse<T>>(() => apiClient.get(path));

const create = <T>(path: string, token: string, payload: ImagePayload) =>
  request<ItemResponse<T>>(() =>
    apiClient.post(path, toFormData(payload), { headers: authHeaders(token) })
  );

const update = <T>(
  path: string,
  token: string,
  id: string,
  payload: ImagePayload
) =>
  request<ItemResponse<T>>(() =>
    apiClient.put(`${path}/${id}`, toFormData(payload), {
      headers: authHeaders(token),
    })
  );

const remove = (path: string, token: string, id: string) =>
  request<{ success: boolean; message: string }>(() =>
    apiClient.delete(`${path}/${id}`, { headers: authHeaders(token) })
  );

const createJson = <T>(path: string, token: string, payload: unknown) =>
  request<ItemResponse<T>>(() =>
    apiClient.post(path, payload, { headers: authHeaders(token) })
  );

const updateJson = <T>(path: string, token: string, id: string, payload: unknown) =>
  request<ItemResponse<T>>(() =>
    apiClient.put(`${path}/${id}`, payload, { headers: authHeaders(token) })
  );

export const resolveImageUrl = (imageUrl: string) =>
  imageUrl?.startsWith("http") ? imageUrl : `${backendOrigin}${imageUrl}`;

export const loginAdmin = async (email: string, password: string) =>
  request<LoginResponse>(() => apiClient.post("/auth/login", { email, password }));

export const fetchGallery = async () => list<GalleryItem>("/gallery");
export const createGalleryItem = async (token: string, payload: ImagePayload) =>
  create<GalleryItem>("/gallery", token, payload);
export const updateGalleryItem = async (
  token: string,
  id: string,
  payload: ImagePayload
) => update<GalleryItem>("/gallery", token, id, payload);
export const deleteGalleryItem = async (token: string, id: string) =>
  remove("/gallery", token, id);

export const fetchNewsEvents = async () =>
  list<NewsEventItem>("/news-events");
export const fetchLatestNewsEvents = async (limit = 6) =>
  list<NewsEventItem>(`/news-events/latest?limit=${limit}`);
export const createNewsEventItem = async (token: string, payload: ImagePayload) =>
  create<NewsEventItem>("/news-events", token, payload);
export const updateNewsEventItem = async (
  token: string,
  id: string,
  payload: ImagePayload
) => update<NewsEventItem>("/news-events", token, id, payload);
export const deleteNewsEventItem = async (token: string, id: string) =>
  remove("/news-events", token, id);

export const fetchNotices = async () => list<NoticeItem>("/notices");
export const createNoticeItem = async (token: string, payload: ImagePayload) =>
  create<NoticeItem>("/notices", token, payload);
export const updateNoticeItem = async (
  token: string,
  id: string,
  payload: ImagePayload
) => update<NoticeItem>("/notices", token, id, payload);
export const deleteNoticeItem = async (token: string, id: string) =>
  remove("/notices", token, id);

export const fetchFaculty = async () => list<FacultyItem>("/faculty");
export const createFacultyItem = async (token: string, payload: ImagePayload) =>
  create<FacultyItem>("/faculty", token, payload);
export const updateFacultyItem = async (
  token: string,
  id: string,
  payload: ImagePayload
) => update<FacultyItem>("/faculty", token, id, payload);
export const deleteFacultyItem = async (token: string, id: string) =>
  remove("/faculty", token, id);

export const fetchPlacements = async () =>
  list<PlacementItem>("/placements");
export const createPlacementItem = async (token: string, payload: unknown) =>
  createJson<PlacementItem>("/placements", token, payload);
export const updatePlacementItem = async (
  token: string,
  academicYear: string,
  payload: unknown
) => updateJson<PlacementItem>("/placements", token, academicYear, payload);
export const deletePlacementItem = async (token: string, academicYear: string) =>
  remove("/placements", token, academicYear);

export const fetchStudentLife = async (category?: StudentLifeItem["category"]) =>
  list<StudentLifeItem>(
    category ? `/student-life?category=${encodeURIComponent(category)}` : "/student-life"
  );
export const createStudentLifeItem = async (token: string, payload: ImagePayload) =>
  create<StudentLifeItem>("/student-life", token, payload);
export const updateStudentLifeItem = async (
  token: string,
  id: string,
  payload: ImagePayload
) => update<StudentLifeItem>("/student-life", token, id, payload);
export const deleteStudentLifeItem = async (token: string, id: string) =>
  remove("/student-life", token, id);
