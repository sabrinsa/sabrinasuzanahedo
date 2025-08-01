export default function MetricsHighlight() {
  const metrics = [
    {
      value: "$50M+ MXN",
      description: "Premium Recovery Led"
    },
    {
      value: "40%",
      description: "Lead Conversion Increase"
    },
    {
      value: "$50K+ MXN",
      description: "First Year Revenue"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center bg-beige-50 p-6 rounded-xl border border-beige-200">
              <div className="text-3xl font-bold text-navy-800 mb-2">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
