export default function ModuleCard({ module }) {
  return (
    <article className="card">
      <img src={module.image} alt={`Illustration for ${module.title}`} />
      <div className="card-body">
        <p className="tag">{module.category}</p>
        <h3>{module.title}</h3>
        <p>{module.description}</p>
        <p className="price">{module.price}</p>
      </div>
    </article>
  );
}
