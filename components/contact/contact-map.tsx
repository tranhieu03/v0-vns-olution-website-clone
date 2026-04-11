"use client"

export function ContactMap() {
  return (
    <section className="py-16 lg:py-24 bg-[#F5F7F9]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#333333] text-balance">
            Bản đồ văn phòng
          </h2>
          <p className="mt-3 text-[#333333]/70">
            Ghé thăm trụ sở chính của VNSolution tại TP. Hồ Chí Minh
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0244395866877!2d106.69996797451!3d10.732606559961085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9023a3a85d%3A0x7c8c0e0b6e3c3b0d!2zTmd1eeG7hW4gVsSDbiBMaW5oLCBRdeG6rW4gNywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1699999999999!5m2!1svi!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="VNSolution Office Location"
          />
        </div>
      </div>
    </section>
  )
}
