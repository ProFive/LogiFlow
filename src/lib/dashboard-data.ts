export type Kpi = {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
};

export type TripRow = {
  id: string;
  route: string;
  driver: string;
  vehicle: string;
  status: "moving" | "done" | "wait" | "issue";
  eta: string;
};

export type FleetRow = {
  vehicleId: string;
  driver: string;
  route: string;
  fuel: number;
  status: "moving" | "wait" | "issue" | "idle";
};

export type AlertRow = {
  level: "error" | "warn" | "info";
  title: string;
  timeAgo: string;
};

export type RevenuePoint = {
  day: string;
  revenue: number;
  cost: number;
};

export type DashboardPayload = {
  kpis: Kpi[];
  trips: TripRow[];
  fleet: FleetRow[];
  alerts: AlertRow[];
  revenue: RevenuePoint[];
};

export const dashboardData: DashboardPayload = {
  kpis: [
    { label: "Chuyen hom nay", value: "47", change: "12% so voi hom qua", trend: "up" },
    { label: "Xe dang chay", value: "23", change: "3 xe so voi 8h truoc", trend: "up" },
    { label: "Doanh thu hom nay", value: "84.2M", change: "8.4% so voi hom qua", trend: "up" },
    { label: "Don cho xu ly", value: "12", change: "Can duyet ngay", trend: "down" }
  ],
  trips: [
    { id: "VT-2401", route: "HCM -> Binh Duong", driver: "Nguyen Van A", vehicle: "51C-123.45", status: "moving", eta: "14:30" },
    { id: "VT-2402", route: "HCM -> Long An", driver: "Tran Van B", vehicle: "51D-456.78", status: "moving", eta: "15:15" },
    { id: "VT-2403", route: "HCM -> Dong Nai", driver: "Le Thi C", vehicle: "51E-789.01", status: "done", eta: "13:45" },
    { id: "VT-2404", route: "HCM -> Tay Ninh", driver: "Pham Van D", vehicle: "51G-234.56", status: "wait", eta: "16:00" },
    { id: "VT-2405", route: "HCM -> Vung Tau", driver: "Hoang Van E", vehicle: "51H-567.89", status: "issue", eta: "--" }
  ],
  fleet: [
    { vehicleId: "51C-123", driver: "Nguyen Van A", route: "HCM -> Binh Duong", fuel: 78, status: "moving" },
    { vehicleId: "51D-456", driver: "Tran Van B", route: "HCM -> Long An", fuel: 45, status: "moving" },
    { vehicleId: "51E-789", driver: "Le Thi C", route: "Dang cho tai kho", fuel: 90, status: "wait" },
    { vehicleId: "51G-234", driver: "Pham Van D", route: "Bao hong - KV Thu Duc", fuel: 22, status: "issue" },
    { vehicleId: "51H-567", driver: "Hoang Van E", route: "HCM -> Dong Nai", fuel: 61, status: "moving" },
    { vehicleId: "51K-890", driver: "Vu Van F", route: "Nghi - Bao duong dinh ky", fuel: 0, status: "idle" }
  ],
  alerts: [
    { level: "error", title: "Xe 51G-234 bao hong - can ho tro ngay", timeAgo: "5 phut truoc" },
    { level: "warn", title: "Xe 51D-456 sap het nhien lieu - con 45%", timeAgo: "18 phut truoc" },
    { level: "warn", title: "3 xe den han dang kiem trong 7 ngay", timeAgo: "1 gio truoc" },
    { level: "info", title: "12 don hang moi dang cho phan cong", timeAgo: "2 gio truoc" },
    { level: "info", title: "Hoa don INV-089 da thanh toan 45M", timeAgo: "3 gio truoc" }
  ],
  revenue: [
    { day: "T2", revenue: 55, cost: 32 },
    { day: "T3", revenue: 45, cost: 28 },
    { day: "T4", revenue: 65, cost: 38 },
    { day: "T5", revenue: 50, cost: 30 },
    { day: "T6", revenue: 72, cost: 42 },
    { day: "T7", revenue: 60, cost: 35 },
    { day: "CN", revenue: 80, cost: 46 }
  ]
};
