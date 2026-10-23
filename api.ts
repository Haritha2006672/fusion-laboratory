const API_BASE_URL = "http://localhost:5001/api";

/* ======================================================
   EXPERIMENT TYPES
====================================================== */

export interface Experiment {
  id: string;
  name: string;
  researcher: string;
  location: string;
  experiment_date: string;
  experiment_time: string;
  status: string;
  created_at?: string;
}

export interface CreateExperimentData {
  id: string;
  name: string;
  researcher: string;
  location: string;
  experiment_date: string;
  experiment_time: string;
  status: string;
}

/* ======================================================
   PLASMA LOG TYPES
====================================================== */

export interface PlasmaLog {
  id: string;
  experiment_id?: string | null;
  experiment: string;
  researcher: string;
  temperature?: string | null;
  pressure?: string | null;
  density?: string | null;
  magnetic_field?: string | null;
  status: string;
  logged_at?: string;
}

export interface CreatePlasmaLogData {
  id: string;
  experiment_id?: string | null;
  experiment: string;
  researcher: string;
  temperature?: string | null;
  pressure?: string | null;
  density?: string | null;
  magnetic_field?: string | null;
  status: string;
}

/* ======================================================
   DIAGNOSTIC TYPES
====================================================== */

export interface Diagnostic {
  id: string;
  equipment_id?: string | null;
  equipment: string;
  issue: string;
  severity: string;
  status: string;
  value: string;
  researcher: string;
  created_at?: string;
}

export interface CreateDiagnosticData {
  id: string;
  equipment_id?: string | null;
  equipment: string;
  issue: string;
  severity: string;
  status: string;
  value: string;
  researcher: string;
}

/* ======================================================
   EQUIPMENT TYPES
====================================================== */

export interface Equipment {
  id: string;
  name: string;
  category: string;
  location: string;
  status: string;
  utilization: number;
  last_maintenance?: string | null;
  next_maintenance?: string | null;
  condition?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface CreateEquipmentData {
  id: string;
  name: string;
  category: string;
  location: string;
  status: string;
  utilization?: number;
  last_maintenance?: string | null;
  next_maintenance?: string | null;
  condition?: string | null;
}

/* ======================================================
   EXPERIMENT API
====================================================== */

export const getExperiments = async (): Promise<
  Experiment[]
> => {
  const response = await fetch(
    `${API_BASE_URL}/experiments`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch experiments"
    );
  }

  const result = await response.json();

  return result.data;
};

export const getExperimentById = async (
  id: string
): Promise<Experiment> => {
  const response = await fetch(
    `${API_BASE_URL}/experiments/${id}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch experiment"
    );
  }

  const result = await response.json();

  return result.data;
};

export const createExperiment = async (
  data: CreateExperimentData
): Promise<Experiment> => {
  const response = await fetch(
    `${API_BASE_URL}/experiments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Failed to create experiment"
    );
  }

  return result.data;
};

export const updateExperiment = async (
  id: string,
  data: Partial<CreateExperimentData>
): Promise<Experiment> => {
  const response = await fetch(
    `${API_BASE_URL}/experiments/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Failed to update experiment"
    );
  }

  return result.data;
};

export const deleteExperiment = async (
  id: string
): Promise<void> => {
  const response = await fetch(
    `${API_BASE_URL}/experiments/${id}`,
    {
      method: "DELETE",
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Failed to delete experiment"
    );
  }
};

/* ======================================================
   PLASMA LOG API
====================================================== */

export const getPlasmaLogs = async (): Promise<
  PlasmaLog[]
> => {
  const response = await fetch(
    `${API_BASE_URL}/plasma-logs`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch plasma logs"
    );
  }

  const result = await response.json();

  return result.data;
};

export const getPlasmaLogById = async (
  id: string
): Promise<PlasmaLog> => {
  const response = await fetch(
    `${API_BASE_URL}/plasma-logs/${id}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch plasma log"
    );
  }

  const result = await response.json();

  return result.data;
};

export const createPlasmaLog = async (
  data: CreatePlasmaLogData
): Promise<PlasmaLog> => {
  const response = await fetch(
    `${API_BASE_URL}/plasma-logs`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Failed to create plasma log"
    );
  }

  return result.data;
};

export const updatePlasmaLog = async (
  id: string,
  data: Partial<CreatePlasmaLogData>
): Promise<PlasmaLog> => {
  const response = await fetch(
    `${API_BASE_URL}/plasma-logs/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Failed to update plasma log"
    );
  }

  return result.data;
};

export const deletePlasmaLog = async (
  id: string
): Promise<void> => {
  const response = await fetch(
    `${API_BASE_URL}/plasma-logs/${id}`,
    {
      method: "DELETE",
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Failed to delete plasma log"
    );
  }
};

/* ======================================================
   DIAGNOSTIC API
====================================================== */

export const getDiagnostics = async (): Promise<
  Diagnostic[]
> => {
  const response = await fetch(
    `${API_BASE_URL}/diagnostics`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch diagnostics"
    );
  }

  const result = await response.json();

  return result.data;
};

export const getDiagnosticById = async (
  id: string
): Promise<Diagnostic> => {
  const response = await fetch(
    `${API_BASE_URL}/diagnostics/${id}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch diagnostic"
    );
  }

  const result = await response.json();

  return result.data;
};

export const createDiagnostic = async (
  data: CreateDiagnosticData
): Promise<Diagnostic> => {
  const response = await fetch(
    `${API_BASE_URL}/diagnostics`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Failed to create diagnostic"
    );
  }

  return result.data;
};

export const updateDiagnostic = async (
  id: string,
  data: Partial<CreateDiagnosticData>
): Promise<Diagnostic> => {
  const response = await fetch(
    `${API_BASE_URL}/diagnostics/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Failed to update diagnostic"
    );
  }

  return result.data;
};

export const deleteDiagnostic = async (
  id: string
): Promise<void> => {
  const response = await fetch(
    `${API_BASE_URL}/diagnostics/${id}`,
    {
      method: "DELETE",
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Failed to delete diagnostic"
    );
  }
};

/* ======================================================
   EQUIPMENT API
====================================================== */

export const getEquipment = async (): Promise<
  Equipment[]
> => {
  const response = await fetch(
    `${API_BASE_URL}/equipment`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch equipment"
    );
  }

  const result = await response.json();

  return result.data;
};

export const getEquipmentById = async (
  id: string
): Promise<Equipment> => {
  const response = await fetch(
    `${API_BASE_URL}/equipment/${id}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch equipment"
    );
  }

  const result = await response.json();

  return result.data;
};

export const createEquipment = async (
  data: CreateEquipmentData
): Promise<Equipment> => {
  const response = await fetch(
    `${API_BASE_URL}/equipment`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Failed to create equipment"
    );
  }

  return result.data;
};

export const updateEquipment = async (
  id: string,
  data: Partial<CreateEquipmentData>
): Promise<Equipment> => {
  const response = await fetch(
    `${API_BASE_URL}/equipment/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Failed to update equipment"
    );
  }

  return result.data;
};

export const deleteEquipment = async (
  id: string
): Promise<void> => {
  const response = await fetch(
    `${API_BASE_URL}/equipment/${id}`,
    {
      method: "DELETE",
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Failed to delete equipment"
    );
  }
};