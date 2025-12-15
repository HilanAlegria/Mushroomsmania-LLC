<template>
  <section class="beneficios container">
    <!-- TÍTULO -->
    <h1 class="titulo">Beneficios de los Hongos Medicinales</h1>

    <!-- INTRO -->
    <p class="intro">
      Los hongos comestibles no solo aportan sabor a la cocina: son alimentos
      funcionales ricos en nutrientes, compuestos bioactivos y antioxidantes,
      cada vez más reconocidos por la ciencia nutricional como aliados de una
      alimentación saludable.
    </p>

    <!-- BENEFICIOS GENERALES -->
    <div class="bloque">
      <h2>Perfil nutricional general</h2>
      <ul>
        <li>Bajos en calorías y grasa, casi sin colesterol ni sodio.</li>
        <li>Ricos en fibra, proteínas vegetales, vitaminas del grupo B y minerales como potasio y selenio.</li>
        <li>Contienen antioxidantes naturales que protegen contra el daño celular.</li>
        <li>Favorecen el metabolismo y el control del peso corporal.</li>
      </ul>
    </div>

    <!-- MELENA DE LEÓN -->
    <div class="bloque">
      <h2>🧠 Melena de León (Hericium erinaceus)</h2>
      <p>
        Reconocida por su perfil funcional, la Melena de León destaca por sus
        posibles beneficios sobre la salud cerebral y el sistema nervioso.
      </p>
      <ul>
        <li>
          <strong>Función cognitiva y memoria:</strong>
          compuestos como hericenonas y erinacinas pueden estimular la producción
          del factor de crecimiento nervioso (NGF), clave para el desarrollo y
          mantenimiento de las neuronas.
        </li>
        <li>
          <strong>Neuroprotección y efecto antiinflamatorio:</strong>
          ayuda a reducir el estrés oxidativo e inflamación del sistema nervioso,
          asociados al deterioro cognitivo.
        </li>
        <li>
          <strong>Salud digestiva y microbioma:</strong>
          contribuye al equilibrio de bacterias beneficiosas en el intestino.
        </li>
        <li>
          <strong>Potente acción antioxidante:</strong>
          gracias a compuestos como la ergotionina y polisacáridos naturales.
        </li>
        <li>
          <strong>Apoyo al sistema inmunológico:</strong>
          contiene beta-glucanos que estimulan una respuesta inmune eficiente.
        </li>
      </ul>
    </div>

    <!-- OYSTER -->
    <div class="bloque">
      <h2>🍄 Hongo Oyster (Pleurotus ostreatus)</h2>
      <p>
        El hongo Oyster es versátil en la cocina y ampliamente estudiado por sus
        beneficios nutricionales y metabólicos.
      </p>
      <ul>
        <li>
          <strong>Refuerzo del sistema inmunológico:</strong>
          sus β-glucanos estimulan células clave de defensa como macrófagos y
          células natural killer.
        </li>
        <li>
          <strong>Acción antioxidante:</strong>
          contiene ergothioneine, que protege las células frente al daño oxidativo.
        </li>
        <li>
          <strong>Salud cardiovascular:</strong>
          puede contribuir a reducir el colesterol LDL y apoyar la regulación de
          la presión arterial.
        </li>
        <li>
          <strong>Control del azúcar en sangre:</strong>
          ayuda a mejorar la sensibilidad a la insulina y la regulación de glucosa.
        </li>
        <li>
          <strong>Apoyo al metabolismo y control de peso:</strong>
          bajo en calorías y alto en fibra, favorece la saciedad.
        </li>
      </ul>
    </div>

    <!-- BENEFICIOS GENERALES EXTRA -->
    <div class="bloque">
      <h2>🍄 Beneficios generales de los hongos comestibles</h2>
      <ul>
        <li>
          <strong>Sistema inmunológico más fuerte:</strong>
          estimulan las defensas naturales del organismo.
        </li>
        <li>
          <strong>Propiedades antiinflamatorias:</strong>
          ayudan a reducir inflamación crónica asociada a diversas enfermedades.
        </li>
        <li>
          <strong>Apoyo al metabolismo:</strong>
          contribuyen a un equilibrio energético saludable y control del apetito.
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Beneficios"
};
</script>

<style scoped>
.beneficios {
  padding: 90px 20px;
}

/* TÍTULOS */
.titulo {
  font-size: 3.2rem;
  color: var(--verde-herbal);
  margin-bottom: 30px;
}

.bloque h2 {
  color: var(--verde-herbal);
  font-size: 2rem;
  margin-bottom: 15px;
}

/* TEXTO */
.intro {
  max-width: 800px;
  color: #cfcfcf;
  font-size: 1.1rem;
  margin-bottom: 60px;
}

.bloque p {
  color: #dddddd;
  margin-bottom: 15px;
  max-width: 900px;
}

/* LISTAS */
.bloque ul {
  list-style: none;
  padding: 0;
}

.bloque li {
  margin-bottom: 12px;
  color: #e6ffe6;
  line-height: 1.6;
}

.bloque li strong {
  color: var(--verde-herbal);
}

/* BLOQUES */
.bloque {
  background: #0d120f;
  padding: 35px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  margin-bottom: 40px;
}
</style>
