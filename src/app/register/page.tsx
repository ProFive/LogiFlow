import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Tạo tài khoản LogiFlow</h1>
        <p>Khởi tạo không gian vận hành cho đội của bạn.</p>
        <form className="auth-form">
          <label>
            Tên doanh nghiệp
            <input type="text" placeholder="Công ty ABC Logistics" />
          </label>
          <label>
            Email quản trị
            <input type="email" placeholder="admin@company.com" />
          </label>
          <label>
            Mật khẩu
            <input type="password" placeholder="Tối thiểu 8 ký tự" />
          </label>
          <button type="button" className="btn btn-primary">
            Đăng ký
          </button>
        </form>
        <p className="auth-note">
          Đã có tài khoản? <Link href="/login">Đăng nhập</Link>
        </p>
      </div>
    </main>
  );
}
