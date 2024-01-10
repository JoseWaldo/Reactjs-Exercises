const HeroSection = () => {
  return (
    <section className="p-8">
      <h2 className="text-6xl font-bold mb-6 text-purple-500">Proposito 🤔</h2>
      <p className="w-3/4">
        El proposito de este proyecto es aprender nuevos conceptos de ReactJS
        mientras que práctico, de manera que publicare tanto la teoria con su
        código y las implementaciones que desarrolle.
      </p>
      <hr className="w-3/4 my-4" />
      <h3 className="font-bold">Temas que quiero poner en práctica:</h3>
      <ul className="list-disc px-8 pt-4">
        <li>Patrones de diseño</li>
        <li>Hooks (useMemo, useReducer, useCallback)</li>
        <li>Tankstack</li>
        <li>StoryBooks</li>
        <li>Testing</li>
        <li>Mejores prácticas</li>
      </ul>
    </section>
  );
};

export default HeroSection;
