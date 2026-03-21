"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  RBAC_CELL_LABEL,
  RBAC_MATRIX_ROWS,
  RBAC_ROLE_DEFS,
  type RbacCell,
} from "@/lib/rbac-landing-data";

function RbacMatrixCell({ cell }: { cell: RbacCell }) {
  if (cell === "dash") {
    return <span className="rbac-matrix-dash">—</span>;
  }
  const label = RBAC_CELL_LABEL[cell];
  const variant =
    cell === "full" || cell === "cru"
      ? "rbac-matrix-badge--ok"
      : cell === "read" || cell === "all"
        ? "rbac-matrix-badge--read"
        : "rbac-matrix-badge--scope";
  return <span className={`rbac-matrix-badge ${variant}`}>{label}</span>;
}

export default function Home() {
  const [lang, setLang] = useState<"vi" | "en">("vi");
  const t = useMemo(() => {
    if (lang === "en") {
      return {
        login: "Login",
        register: "Sign up",
        eyebrow: "",
        heroTitle: "Logistics operating infrastructure\nfor Vietnam SMEs",
        heroDesc:
          "LogiFlow transforms logistics operations by digitizing dispatching, fleet, orders, drivers, and costs in real time—reducing operational leakage through an AI-powered control tower that’s easy to deploy.",
        metric1: "Dispatch time reduction",
        metric2: "Fuel cost reduction",
        metric3: "On-time delivery rate",
        ctaTry: "Start trial",
        ctaDemo: "View product demo",
        ctaInvestor: "Investor login",
        problem: "Problem",
        problemCards: [
          {
            title: "Fragmented operation data",
            desc: "Orders, vehicles, drivers, and costs are split across Excel, chat apps, and calls.",
          },
          {
            title: "Hard-to-control variable costs",
            desc: "Teams lack early warning signals for fuel, maintenance, and SLA delays.",
          },
          {
            title: "No real-time visibility",
            desc: "Managers need a single control tower for time-critical decisions.",
          },
        ],
        solution: "Solution",
        solutionDesc:
          "LogiFlow delivers an all-in-one logistics operating platform: dispatch, fleet management, map tracking, cost control, and KPI reporting in one unified workflow.",
        product: "Product",
        productCards: [
          { title: "Order & Dispatch", desc: "Create orders, plan trips, assign drivers/vehicles, and resolve exceptions by SLA." },
          { title: "Fleet & Map", desc: "Track vehicles in real-time with maintenance and route health alerts." },
          { title: "Cost & Invoice", desc: "Control operational spend and invoice flows for finance and management teams." },
        ],
        market: "Market",
        marketCards: [
          { title: "Core ICP", desc: "SME logistics companies with 10-300 vehicles in major Vietnam cities." },
          { title: "Market drivers", desc: "E-commerce growth and rising demand for reliable last-mile delivery." },
          { title: "Go-to-market edge", desc: "Fast onboarding, intuitive UX, and practical workflows for field teams." },
        ],
        traction: "Traction",
        tractionCards: [
          { title: "10+", desc: "Pilot customers" },
          { title: "500+", desc: "Trips processed daily" },
          { title: "91%", desc: "On-time delivery rate" },
        ],
        businessModel: "Business Model",
        businessCards: [
          { title: "SaaS Subscription", desc: "Monthly plans based on active vehicles, scalable by business size." },
          { title: "Add-ons", desc: "GPS, ERP, BI, and automation integrations based on customer needs." },
          { title: "Enterprise Setup", desc: "Implementation fee for large accounts and custom workflows." },
        ],
        roadmap: "Roadmap",
        roadmapItems: [
          { q: "Q1", d: "Complete MVP and launch with 10 pilot customers in Ho Chi Minh City." },
          { q: "Q2", d: "Integrate multi-vendor GPS, launch billing, and complete RBAC permissions." },
          { q: "Q3", d: "Scale to 50 paying customers, optimize retention and unit economics." },
          { q: "Q4", d: "Expand to Hanoi/Da Nang and build an inter-city logistics partner network." },
        ],
        team: "Team",
        teamCards: [
          { title: "CEO / Product", desc: "Hands-on logistics operations experience and B2B SaaS product building." },
          { title: "CTO / Engineering", desc: "Strong track record in real-time systems, data pipelines, and platform scale." },
          { title: "Ops Advisor", desc: "Domain advisory in transport operations and cost optimization in Vietnam." },
        ],
        rbacEyebrow: "Security & access control",
        rbacTitle: "RBAC + Data-level permissions",
        rbacIntroBefore: "We combine ",
        rbacIntroStrong1: "Role-Based Access Control",
        rbacIntroMid: " with ",
        rbacIntroStrong2: "Data-level Permission",
        rbacIntroAfter:
          " — so every user only sees and does what they are allowed to—no more, no less.",
        rbacMatrixTitle: "Permission matrix (11 resources × 6 roles)",
        rbacMatrixColResource: "Resource",
        rbacMatrixColumns: ["Admin", "Manager", "Operation", "Driver", "Warehouse", "Customer"],
        rbacDataTitle: "Data-level permissions",
        rbacDataPrinciplesTitle: "General principles",
        rbacDataSchemaTitle: "Suggested DB schema",
        rbacDataSchemaLines: [
          "roles(id, name, description)",
          "permissions(id, resource, action)",
          "role_permissions(role_id, permission_id)",
          "users(id, role_id, tenant_id, branch_id)",
          "permission_audit_log(user_id, action, changed_by, created_at)",
        ],
        rbacPrinciples: [
          {
            lead: "1. Every query is automatically filtered by ",
            code: "tenant_id",
          },
          {
            lead: "2. Drivers only see orders where ",
            code: "driver_id = me",
          },
          {
            lead: "3. Customers only see orders where ",
            code: "customer_id = me",
          },
          {
            lead: "4. Operations scope: ",
            code: "branch_id IN allowed_branches",
          },
          {
            lead: "5. Filters apply at the ",
            strong: "Repository",
            tail: " layer—not only in controllers.",
          },
        ],
        finalCta: "CTA · Explore investment opportunity in LogiFlow",
        finalDesc:
          "We are opening our funding round to accelerate product expansion and commercialization. We are ready to share the deck, data room, and product walkthrough.",
        finalDeck: "Get investor deck",
        finalData: "Access sample data",
        contactTitle: "Contact",
        contactEmailLabel: "Email",
        contactPhoneLabel: "Phone",
      };
    }
    return {
      login: "Đăng nhập",
      register: "Đăng ký",
      eyebrow: "",
      heroTitle: "Hạ tầng vận hành logistics\ndành cho SMEs tại Việt Nam",
      heroDesc:
        "LogiFlow chuyển đổi hoạt động logistics bằng cách số hóa điều phối, quản lý đội xe, đơn hàng, tài xế và chi phí theo thời gian thực—giúp giảm thất thoát vận hành thông qua một trung tâm điều hành (control tower) ứng dụng AI, dễ dàng triển khai.",
      metric1: "Giảm thời gian điều phối",
      metric2: "Giảm chi phí nhiên liệu",
      metric3: "Tỷ lệ giao đúng hẹn",
      ctaTry: "Đăng ký trải nghiệm",
      ctaDemo: "Xem sản phẩm demo",
      ctaInvestor: "Nhà đầu tư đăng nhập",
      problem: "Vấn đề",
      problemCards: [
        {
          title: "Dữ liệu vận hành phân mảnh",
          desc: "Order, xe, tài xế và chi phí nằm ở nhiều công cụ rời rạc như Excel/Zalo/phone.",
        },
        {
          title: "Chi phí biến động khó kiểm soát",
          desc: "Doanh nghiệp thiếu cảnh báo sớm cho nhiên liệu, bảo trì và trễ SLA.",
        },
        {
          title: "Quản lý thiếu realtime",
          desc: "Không có control tower thống nhất để ra quyết định theo thời gian thực.",
        },
      ],
      solution: "Giải pháp",
      solutionDesc:
        "LogiFlow cung cấp nền tảng vận hành logistics all-in-one: điều phối chuyến, quản lý đội xe, theo dõi bản đồ realtime, kiểm soát chi phí và báo cáo KPI trong một workflow thống nhất.",
      product: "Sản phẩm",
      productCards: [
        { title: "Đơn hàng & Điều phối", desc: "Tạo đơn, lập chuyến, gán tài xế/xe và xử lý ngoại lệ theo SLA." },
        { title: "Đội xe & Bản đồ", desc: "Theo dõi phương tiện realtime, bảo trì, tình trạng tuyến và cảnh báo vận hành." },
        { title: "Chi phí & Hóa đơn", desc: "Quản trị chi phí vận hành và luồng hóa đơn cho kế toán và quản lý." },
      ],
      market: "Thị trường",
      marketCards: [
        { title: "ICP chính", desc: "Doanh nghiệp logistics SME 10-300 xe tại TP.HCM, Hà Nội, Đà Nẵng." },
        { title: "Động lực thị trường", desc: "Tăng trưởng thương mại điện tử và nhu cầu tối ưu last-mile delivery." },
        { title: "Lợi thế tiếp cận", desc: "Chu kỳ triển khai ngắn, UX đơn giản, phù hợp đội vận hành thực địa." },
      ],
      traction: "Kết quả tăng trưởng",
      tractionCards: [
        { title: "10+", desc: "Khách hàng pilot" },
        { title: "500+", desc: "Chuyến xử lý mỗi ngày" },
        { title: "91%", desc: "Tỷ lệ giao đúng hẹn" },
      ],
      businessModel: "Mô hình kinh doanh",
      businessCards: [
        { title: "Gói thuê bao SaaS", desc: "Gói theo số xe hoạt động/tháng, mở rộng theo quy mô doanh nghiệp." },
        { title: "Tiện ích mở rộng", desc: "Tích hợp GPS, ERP, BI và automation theo nhu cầu khách hàng." },
        { title: "Triển khai doanh nghiệp", desc: "Phí triển khai ban đầu cho dự án lớn và custom workflow." },
      ],
      roadmap: "Lộ trình",
      roadmapItems: [
        { q: "Q1", d: "Hoàn thiện MVP, triển khai 10 khách hàng pilot tại HCM." },
        { q: "Q2", d: "Tích hợp GPS đa nhà cung cấp, triển khai billing và RBAC đầy đủ." },
        { q: "Q3", d: "Mở rộng 50 khách hàng trả phí, tối ưu retention và unit economics." },
        { q: "Q4", d: "Mở rộng ra Hà Nội/Đà Nẵng, xây network đối tác vận tải liên vùng." },
      ],
      team: "Đội ngũ",
      teamCards: [
        { title: "Giám đốc điều hành / Sản phẩm", desc: "Kinh nghiệm vận hành logistics và xây sản phẩm B2B SaaS." },
        { title: "Giám đốc công nghệ / Kỹ thuật", desc: "Năng lực triển khai hệ thống realtime, data pipeline và platform scale." },
        { title: "Cố vấn vận hành", desc: "Cố vấn mạng lưới vận tải và tối ưu chi phí điều phối tại Việt Nam." },
      ],
      rbacEyebrow: "Bảo mật & Kiểm soát truy cập",
      rbacTitle: "Phân quyền RBAC + Data-level",
      rbacIntroBefore: "Mô hình ",
      rbacIntroStrong1: "Role-Based Access Control",
      rbacIntroMid: " kết hợp ",
      rbacIntroStrong2: "Data-level Permission",
      rbacIntroAfter:
        " — đảm bảo mỗi người dùng chỉ thấy và làm được đúng những gì họ được phép, không hơn không kém.",
      rbacMatrixTitle: "Ma trận quyền hạn (11 tài nguyên × 6 vai trò)",
      rbacMatrixColResource: "Tài nguyên",
      rbacMatrixColumns: ["Admin", "Manager", "Operation", "Driver", "Warehouse", "Customer"],
      rbacDataTitle: "Phân quyền theo dữ liệu (Data-level)",
      rbacDataPrinciplesTitle: "🔑 Nguyên tắc chung",
      rbacDataSchemaTitle: "🗄️ DB Schema gợi ý",
      rbacDataSchemaLines: [
        "roles(id, name, description)",
        "permissions(id, resource, action)",
        "role_permissions(role_id, permission_id)",
        "users(id, role_id, tenant_id, branch_id)",
        "permission_audit_log(user_id, action, changed_by, created_at)",
      ],
      rbacPrinciples: [
        {
          lead: "1. Mọi query đều tự động filter theo ",
          code: "tenant_id",
        },
        {
          lead: "2. Driver chỉ thấy đơn: ",
          code: "driver_id = me",
        },
        {
          lead: "3. Customer chỉ thấy đơn: ",
          code: "customer_id = me",
        },
        {
          lead: "4. Operation filter: ",
          code: "branch_id IN allowed_branches",
        },
        {
          lead: "5. Filter áp dụng ở ",
          strong: "tầng Repository",
          tail: ", không phụ thuộc vào controller",
        },
      ],
      finalCta: "Hành động · Tìm hiểu cơ hội đầu tư vào LogiFlow",
      finalDesc:
        "Chúng tôi đang mở vòng gọi vốn để mở rộng sản phẩm và tăng tốc thương mại hóa. Sẵn sàng gửi deck, data room và lịch product walkthrough.",
      finalDeck: "Nhận Investor Deck",
      finalData: "Truy cập dữ liệu mẫu",
      contactTitle: "Thông tin liên hệ",
      contactEmailLabel: "Email",
      contactPhoneLabel: "Phone",
    };
  }, [lang]);

  const rbacRoleCards = useMemo(
    () => RBAC_ROLE_DEFS.map((def) => ({ accent: def.accent, ...(lang === "vi" ? def.vi : def.en) })),
    [lang],
  );

  return (
    <main className="landing-root">
      <div className="landing-shell">
        <div className="bg-orb orb-1" />
        <div className="bg-orb orb-2" />
        <div className="bg-orb orb-3" />
        <header className="landing-nav">
          <div className="brand">LogiFlow</div>
          <div className="landing-actions">
            <div className="lang-switch">
              <button
                type="button"
                className={`lang-btn ${lang === "vi" ? "active" : ""}`}
                onClick={() => setLang("vi")}
              >
                VI
              </button>
              <button
                type="button"
                className={`lang-btn ${lang === "en" ? "active" : ""}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>
            <Link href="/login" className="btn btn-ghost">
              {t.login}
            </Link>
            <Link href="/register" className="btn btn-primary">
              {t.register}
            </Link>
          </div>
        </header>

        <section className="hero reveal delay-1">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 key={lang}>
            {t.heroTitle}
          </h1>
          <p>{t.heroDesc}</p>
          <div className="hero-metrics">
            <div>
              <strong>35%</strong>
              <span>{t.metric1}</span>
            </div>
            <div>
              <strong>18%</strong>
              <span>{t.metric2}</span>
            </div>
            <div>
              <strong>96%</strong>
              <span>{t.metric3}</span>
            </div>
          </div>
          <div className="hero-cta">
            <Link href="/register" className="btn btn-primary">
              {t.ctaTry}
            </Link>
            <Link href="/dashboard" className="btn btn-ghost">
              {t.ctaDemo}
            </Link>
            <Link href="/login" className="btn btn-ghost">
              {t.ctaInvestor}
            </Link>
          </div>
        </section>
      </div>

      <div className="landing-band landing-band--story">
        <div className="landing-band-inner">
          <section className="section-block reveal delay-2">
            <h2>{t.problem}</h2>
            <div className="features">
              {t.problemCards.map((card) => (
                <article key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-block reveal delay-3">
            <h2>{t.solution}</h2>
            <div className="single-card">{t.solutionDesc}</div>
          </section>

          <section className="section-block reveal delay-4">
            <h2>{t.product}</h2>
            <div className="features investor-grid">
              {t.productCards.map((card) => (
                <article key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="landing-band landing-band--market">
        <div className="landing-band-inner">
          <section className="section-block reveal delay-5">
            <h2>{t.market}</h2>
            <div className="features">
              {t.marketCards.map((card) => (
                <article key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-block reveal delay-6">
            <h2>{t.traction}</h2>
            <div className="features features--traction">
              {t.tractionCards.map((card) => (
                <article key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-block reveal delay-7">
            <h2>{t.businessModel}</h2>
            <div className="features">
              {t.businessCards.map((card) => (
                <article key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="landing-band landing-band--roadmap">
        <div className="landing-band-inner">
          <section className="timeline section-block reveal delay-8">
            <h2>{t.roadmap}</h2>
            <div className="timeline-grid">
              {t.roadmapItems.map((item) => (
                <article key={item.q}>
                  <h4>{item.q}</h4>
                  <p>{item.d}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="landing-band landing-band--security">
        <div className="landing-band-inner">
          <section className="section-block rbac-section reveal delay-9">
        <p className="eyebrow rbac-section-eyebrow">{t.rbacEyebrow}</p>
        <h2>{t.rbacTitle}</h2>
        <p className="rbac-intro">
          {t.rbacIntroBefore}
          <strong>{t.rbacIntroStrong1}</strong>
          {t.rbacIntroMid}
          <strong>{t.rbacIntroStrong2}</strong>
          {t.rbacIntroAfter}
        </p>

        <div className="rbac-roles-grid">
          {rbacRoleCards.map((role) => (
            <article key={role.title} className={`rbac-role-card rbac-role-card--${role.accent}`}>
              <header className="rbac-role-head">
                <h3>{role.title}</h3>
                <p className="rbac-role-sub">{role.subtitle}</p>
              </header>
              <div className="rbac-role-body">
                {role.plus.map((line) => (
                  <div key={line} className="rbac-role-line rbac-role-line--ok">
                    <span className="rbac-role-mark" aria-hidden>
                      ✓
                    </span>
                    <span>{line}</span>
                  </div>
                ))}
                {role.minus.map((line) => (
                  <div key={line} className="rbac-role-line rbac-role-line--no">
                    <span className="rbac-role-mark" aria-hidden>
                      ✗
                    </span>
                    <span>{line}</span>
                  </div>
                ))}
                <div className="rbac-role-scope">
                  <span className="rbac-role-scope-label">{role.scopeLabel}</span>{" "}
                  <strong>{role.scope}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>

        <h3 className="rbac-subheading">{t.rbacMatrixTitle}</h3>
        <div className="rbac-matrix-scroll">
          <table className="rbac-matrix-table">
            <thead>
              <tr>
                <th scope="col">{t.rbacMatrixColResource}</th>
                {t.rbacMatrixColumns.map((col) => (
                  <th key={col} scope="col">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RBAC_MATRIX_ROWS.map((row) => (
                <tr key={row.resourceEn}>
                  <th scope="row">{lang === "vi" ? row.resourceVi : row.resourceEn}</th>
                  {row.cells.map((cell, i) => (
                    <td key={`${row.resourceEn}-${i}`}>
                      <RbacMatrixCell cell={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="rbac-subheading">{t.rbacDataTitle}</h3>
        <div className="rbac-data-grid">
          <article className="rbac-data-card">
            <h4>{t.rbacDataPrinciplesTitle}</h4>
            <ul className="rbac-principles">
              {t.rbacPrinciples.map((p, idx) => (
                <li key={idx}>
                  {"code" in p && p.code ? (
                    <>
                      {p.lead}
                      <code className="rbac-inline-code">{p.code}</code>
                    </>
                  ) : (
                    <>
                      {p.lead}
                      <strong>{"strong" in p ? p.strong : ""}</strong>
                      {"tail" in p ? p.tail : ""}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </article>
          <article className="rbac-data-card">
            <h4>{t.rbacDataSchemaTitle}</h4>
            <pre className="rbac-schema">
              {t.rbacDataSchemaLines.join("\n")}
            </pre>
          </article>
        </div>
          </section>
        </div>
      </div>

      <div className="landing-band landing-band--closing">
        <div className="landing-band-inner">
          <section className="section-block reveal delay-10">
            <h2>{t.team}</h2>
            <div className="features">
              {t.teamCards.map((card) => (
                <article key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-block reveal delay-11">
            <div className="final-grid">
              <article className="cta-panel">
                <h2>{t.finalCta}</h2>
                <p>{t.finalDesc}</p>
                <div className="hero-cta">
                  <Link href="/register" className="btn btn-primary">
                    {t.finalDeck}
                  </Link>
                  <Link href="/login" className="btn btn-ghost">
                    {t.finalData}
                  </Link>
                </div>
              </article>
              <article className="contact-panel">
                <div className="eyebrow" style={{ marginBottom: "8px" }}>
                  {lang === "vi" ? "LogiFlow - Quản lý vận tải" : "LogiFlow - Fleet Management"}
                </div>
                <h2>{t.contactTitle}</h2>
                <div className="contact-grid">
                  <div className="contact-item">
                    <div className="contact-label">{t.contactEmailLabel}</div>
                    <div className="contact-value">info@LogiFlow.vn</div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-label">{t.contactPhoneLabel}</div>
                    <div className="contact-value">0935.357.567</div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
