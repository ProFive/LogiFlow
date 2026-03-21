/** RBAC landing content aligned with ideas/logiflow-mvp-spec1.html (+ 2 resources to reach 11 rows). */

export type RbacCell = "full" | "read" | "cru" | "own" | "eta" | "collect" | "ops" | "all" | "dash";

export type RbacAccent = "admin" | "manager" | "operation" | "driver" | "warehouse" | "customer";

export const RBAC_CELL_LABEL: Record<RbacCell, string> = {
  full: "Full",
  read: "Read",
  cru: "C/R/U",
  own: "Own",
  eta: "ETA",
  collect: "Collect",
  ops: "Ops only",
  all: "All",
  dash: "—",
};

/** 11 resources × 6 roles — order: Admin, Manager, Operation, Driver, Warehouse, Customer */
export const RBAC_MATRIX_ROWS: { resourceVi: string; resourceEn: string; cells: RbacCell[] }[] = [
  {
    resourceVi: "Đơn hàng",
    resourceEn: "Orders",
    cells: ["full", "read", "cru", "own", "read", "own"],
  },
  {
    resourceVi: "Phân công tài xế",
    resourceEn: "Driver assignment",
    cells: ["full", "dash", "full", "dash", "dash", "dash"],
  },
  {
    resourceVi: "GPS / Tracking",
    resourceEn: "GPS / Tracking",
    cells: ["full", "all", "all", "own", "dash", "eta"],
  },
  {
    resourceVi: "Kho hàng",
    resourceEn: "Warehouse",
    cells: ["full", "read", "read", "dash", "full", "dash"],
  },
  {
    resourceVi: "Phương tiện",
    resourceEn: "Vehicles",
    cells: ["full", "read", "cru", "own", "dash", "dash"],
  },
  {
    resourceVi: "Báo cáo KPI",
    resourceEn: "KPI reports",
    cells: ["full", "full", "ops", "own", "dash", "dash"],
  },
  {
    resourceVi: "COD & Thanh toán",
    resourceEn: "COD & payments",
    cells: ["full", "read", "cru", "collect", "dash", "own"],
  },
  {
    resourceVi: "Quản trị người dùng",
    resourceEn: "User management",
    cells: ["full", "read", "read", "own", "dash", "dash"],
  },
  {
    resourceVi: "Cài đặt hệ thống",
    resourceEn: "System settings",
    cells: ["full", "dash", "dash", "dash", "dash", "dash"],
  },
  {
    resourceVi: "Chuyến vận chuyển",
    resourceEn: "Trips",
    cells: ["full", "read", "cru", "own", "read", "read"],
  },
  {
    resourceVi: "Hóa đơn & chứng từ",
    resourceEn: "Invoices & documents",
    cells: ["full", "read", "read", "dash", "dash", "own"],
  },
];

export type RbacRoleLocale = {
  title: string;
  subtitle: string;
  plus: string[];
  minus: string[];
  scopeLabel: string;
  scope: string;
};

export const RBAC_ROLE_DEFS: { accent: RbacAccent; vi: RbacRoleLocale; en: RbacRoleLocale }[] = [
  {
    accent: "admin",
    vi: {
      title: "👑 Admin",
      subtitle: "Toàn quyền hệ thống",
      plus: [
        "Quản lý user & phân quyền",
        "Cấu hình toàn bộ hệ thống",
        "Xem & xóa mọi dữ liệu",
        "Audit log đầy đủ",
      ],
      minus: [],
      scopeLabel: "Phạm vi dữ liệu:",
      scope: "Toàn hệ thống",
    },
    en: {
      title: "👑 Admin",
      subtitle: "Full system access",
      plus: [
        "User & permission management",
        "Full system configuration",
        "View & delete all data",
        "Full audit log",
      ],
      minus: [],
      scopeLabel: "Data scope:",
      scope: "Entire system",
    },
  },
  {
    accent: "manager",
    vi: {
      title: "📊 Manager",
      subtitle: "Giám sát & báo cáo",
      plus: ["Xem toàn bộ dashboard KPI", "Xem báo cáo doanh thu / hiệu suất"],
      minus: ["Không tạo / sửa đơn hàng", "Không phân công tài xế"],
      scopeLabel: "Phạm vi dữ liệu:",
      scope: "Toàn công ty",
    },
    en: {
      title: "📊 Manager",
      subtitle: "Monitoring & reporting",
      plus: ["View full KPI dashboard", "View revenue / performance reports"],
      minus: ["Cannot create or edit orders", "Cannot assign drivers"],
      scopeLabel: "Data scope:",
      scope: "Whole company",
    },
  },
  {
    accent: "operation",
    vi: {
      title: "🚚 Operation",
      subtitle: "Điều phối vận hành",
      plus: ["Tạo & phân công đơn hàng", "Gán tài xế / tuyến đường", "Xử lý sự cố vận hành"],
      minus: ["Không xóa đơn hàng"],
      scopeLabel: "Phạm vi dữ liệu:",
      scope: "Theo chi nhánh",
    },
    en: {
      title: "🚚 Operation",
      subtitle: "Dispatch operations",
      plus: ["Create & assign orders", "Assign drivers / routes", "Handle operational incidents"],
      minus: ["Cannot delete orders"],
      scopeLabel: "Data scope:",
      scope: "By branch",
    },
  },
  {
    accent: "driver",
    vi: {
      title: "🚛 Driver",
      subtitle: "Tài xế giao hàng",
      plus: ["Xem đơn được giao (own only)", "Cập nhật trạng thái chuyến", "Upload ảnh POD + chữ ký"],
      minus: ["Không xem đơn tài xế khác"],
      scopeLabel: "Phạm vi dữ liệu:",
      scope: "Chỉ đơn được giao",
    },
    en: {
      title: "🚛 Driver",
      subtitle: "Delivery driver",
      plus: ["View assigned orders (own only)", "Update trip status", "Upload POD photos + signature"],
      minus: ["Cannot view other drivers' orders"],
      scopeLabel: "Data scope:",
      scope: "Assigned orders only",
    },
  },
  {
    accent: "warehouse",
    vi: {
      title: "🏢 Warehouse",
      subtitle: "Quản lý kho",
      plus: ["Nhập / xuất / kiểm kê kho", "Xác nhận đóng gói đơn hàng"],
      minus: ["Không điều phối xe / tài xế", "Không xem GPS tracking"],
      scopeLabel: "Phạm vi dữ liệu:",
      scope: "Kho được phân công",
    },
    en: {
      title: "🏢 Warehouse",
      subtitle: "Warehouse operations",
      plus: ["Inbound / outbound / stock count", "Confirm order packing"],
      minus: ["Cannot dispatch vehicles or drivers", "Cannot view GPS tracking"],
      scopeLabel: "Data scope:",
      scope: "Assigned warehouse(s)",
    },
  },
  {
    accent: "customer",
    vi: {
      title: "📦 Customer",
      subtitle: "Khách hàng B2B",
      plus: ["Tạo đơn hàng của mình", "Theo dõi tracking link / ETA", "Xem lịch sử & tải hóa đơn"],
      minus: ["Không xem đơn khách khác"],
      scopeLabel: "Phạm vi dữ liệu:",
      scope: "Chỉ đơn của mình",
    },
    en: {
      title: "📦 Customer",
      subtitle: "B2B customer",
      plus: ["Create own orders", "Track link / ETA", "View history & download invoices"],
      minus: ["Cannot view other customers' orders"],
      scopeLabel: "Data scope:",
      scope: "Own orders only",
    },
  },
];
