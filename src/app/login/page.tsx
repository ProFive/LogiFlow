import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Đăng nhập LogiFlow</h1>
        <p>Truy cập hệ thống quản lý vận tải của bạn.</p>
        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="you@company.com" />
          </label>
          <label>
            Mật khẩu
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="button" className="btn btn-primary">
            Đăng nhập
          </button>
        </form>
        <p className="auth-note">
          Chưa có tài khoản? <Link href="/register">Đăng ký ngay</Link>
        </p>
      </div>
    </main>
  );
}
