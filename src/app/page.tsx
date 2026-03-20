"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

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
        traction1: "Pilot customers",
        traction2: "Trips processed daily",
        traction3: "On-time delivery rate",
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
      traction1: "Khách hàng pilot",
      traction2: "Chuyến xử lý mỗi ngày",
      traction3: "Tỷ lệ giao đúng hẹn",
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

  return (
    <main className="landing">
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
        <div className="hero-metrics">
          <div>
            <strong>10+</strong>
            <span>{t.traction1}</span>
          </div>
          <div>
            <strong>500+</strong>
            <span>{t.traction2}</span>
          </div>
          <div>
            <strong>91%</strong>
            <span>{t.traction3}</span>
          </div>
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

      <section className="section-block reveal delay-9">
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

      <section className="section-block reveal delay-10">
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
    </main>
  );
}
