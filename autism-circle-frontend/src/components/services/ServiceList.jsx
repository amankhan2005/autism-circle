import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  const services = [
    {
      title: "ABA Therapy",
      description:
        "Applied Behavior Analysis (ABA) therapy is tailored to each child's individual strengths and needs. We focus on communication, behavior, and independence using structured, evidence-based methods.",
    },
    {
      title: "Parent & Caregiver Training",
      description:
        "We empower families with strategies to support their child’s development through practical coaching, routines, and behavior management techniques.",
    },
    {
      title: "Positive Behaviour Support",
      description:
        "We identify behavior triggers and create structured plans to teach positive alternatives, improving emotional regulation and communication.",
    },
    {
      title: "Social Skills Groups",
      description:
        "Structured group sessions that help children develop communication, interaction, and teamwork skills in real-life scenarios.",
    },
    {
      title: "Daily Living Skills",
      description:
        "Teaching essential routines like dressing, hygiene, and safety to build independence and confidence.",
    },
    {
      title: "Home-Based Support",
      description:
        "Therapy delivered in the child’s natural environment to ensure consistent and meaningful progress.",
    },
  ];

  return (
    <section className="section-padding bg-lightBg">
      <Container>
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive, evidence-based programs designed to support your child’s growth and independence."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServiceList;