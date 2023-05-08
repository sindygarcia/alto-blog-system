/* eslint-disable react/no-unescaped-entities */
export default function ContactPage() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px", marginBottom: "20px" }}>Let's Chat</h1>
      <section>
        <p style={{ fontSize: "32px" }}>We would love to hear from you!</p>
        <div
          style={{
            display: "flex",
            gap: "32px",
            padding: "24px 0",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p>
              <strong>Call us at</strong>
            </p>
            <p>1-800-3323233</p>
          </div>
          <div>
            <p>
              <strong>Email us at</strong>
            </p>
            <p>food@test.com</p>
          </div>
          <div>
            <p>
              <strong>Visit us at</strong>
            </p>
            <p>940 Pitner Ave #2</p>
          </div>
        </div>
      </section>
    </div>
  );
}
