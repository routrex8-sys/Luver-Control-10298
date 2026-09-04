import React, { useEffect, useState } from "react";

const members = [
  ["Thiago Zierse", "Mentor"],
  ["Gleyciene", "Marketing"],
  ["Yasmin", "Marketing"],
  ["Ana Luiza", "Marketing"],
  ["Sumaya", "Marketing"],
  ["Enzo", "Mecânica"],
  ["Thiaguinho", "Mecânica"],
  ["Luís", "Mecânica"],
  ["Pamela", "Mecânica"],
  ["Paloma", "Mecânica"],
  ["Lucas", "Mecânica"],
  ["Yarla", "Programação"],
  ["Murillo", "Programação"],
];

const photos = [
  {
    src: "./assets/robot-competition-01.jpg",
    alt: "Robô Dual Fire da equipe 10298 pontuando no campo da temporada 2026",
    label: "Em campo",
    className: "wide",
  },
  {
    src: "./assets/robot-competition-02.jpg",
    alt: "Detalhe do mecanismo do robô Dual Fire com as bolas amarelas da temporada 2026",
    label: "Mecanismo de coleta",
    className: "tall",
  },
  {
    src: "./assets/robot-competition-03.jpg",
    alt: "Robô 10298 durante uma partida no Regional de Osasco",
    label: "Regional de Osasco",
    className: "",
  },
];

const seasonFacts = [
  [
    "12–15 MAR",
    "Regional Brasil — SESI Osasco",
    "51 equipes de quatro países reunidas em São Paulo.",
  ],
  [
    "RANK 16",
    "Classificatórias",
    "Campanha oficial de 7 vitórias e 6 derrotas.",
  ],
  [
    "ALIANÇA 04",
    "Playoffs",
    "A Luver Control entrou como equipe reserva e disputou duas partidas eliminatórias.",
  ],
  [
    "27 MAR",
    "Show Safra Educação",
    "Dual Fire foi apresentado ao público em Lucas do Rio Verde.",
  ],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") {
        setActivePhoto(null);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="site-header">
        <button
          className="wordmark"
          onClick={() => goTo("inicio")}
          aria-label="Ir para o início"
        >
          <span className="wordmark-mark">LC</span>

          <span>
            LUVER
            <strong>CONTROL</strong>
          </span>
        </button>

        <nav
          className={menuOpen ? "open" : ""}
          aria-label="Navegação principal"
        >
          <button onClick={() => goTo("equipe")}>A equipe</button>
          <button onClick={() => goTo("robo")}>Dual Fire</button>
          <button onClick={() => goTo("temporada")}>Temporada</button>
          <button onClick={() => goTo("integrantes")}>Integrantes</button>
        </nav>

        <a
          className="header-link"
          href="https://www.thebluealliance.com/team/10298"
          target="_blank"
          rel="noreferrer"
        >
          The Blue Alliance
          <ArrowIcon />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Abrir menu"
        >
          <span />
          <span />
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-copy">
            <p className="kicker">
              <span /> FRC TEAM 10298 · LUCAS DO RIO VERDE
            </p>

            <h1>
              <span>Precisão</span>
              <br />
              sob pressão.
            </h1>

            <p className="hero-lead">
              Somos a Luver Control. Uma equipe que transforma teoria em
              movimento, estratégia em resultado e jovens talentos em
              protagonistas.
            </p>

            <div className="hero-actions">
              <button
                className="button primary"
                onClick={() => goTo("robo")}
              >
                Conheça o Dual Fire
                <ArrowIcon />
              </button>

              <button
                className="button ghost"
                onClick={() => goTo("integrantes")}
              >
                Ver a equipe
              </button>
            </div>
          </div>

          <div className="hero-media">
            <img
              src="./assets/robot-competition-01.jpg"
              alt="Robô Dual Fire da Luver Control em ação no Regional Brasil de 2026"
            />

            <div className="image-tag">
              <strong>DUAL FIRE</strong>
              <span>Temporada 2026</span>
            </div>

            <span className="vertical-label">
              BUILD · CODE · COMPETE
            </span>
          </div>

          <div className="hero-index" aria-hidden="true">
            10
            <span>298</span>
          </div>
        </section>

        <section
          className="scoreboard"
          aria-label="Resultados da temporada 2026"
        >
          <div>
            <small>Temporada</small>
            <strong>2026</strong>
          </div>

          <div>
            <small>Regional Osasco</small>
            <strong>#16</strong>
          </div>

          <div>
            <small>Campanha oficial</small>
            <strong>7—6</strong>
          </div>

          <div>
            <small>Playoffs</small>
            <strong>Aliança 04</strong>
          </div>

          <a
            href="https://www.thebluealliance.com/team/10298"
            target="_blank"
            rel="noreferrer"
          >
            Dados completos
            <ArrowIcon />
          </a>
        </section>

        <section className="about section" id="equipe">
          <div className="section-number">01</div>

          <div className="section-heading">
            <p className="kicker">QUEM SOMOS</p>

            <h2>
              O interior de Mato Grosso também constrói o futuro.
            </h2>
          </div>

          <div className="about-copy">
            <p className="lead">
              Nascida em 2024 e estreante oficial em 2025, a Luver
              Control reúne estudantes do ensino médio da rede estadual
              e do SENAI Lucas do Rio Verde.
            </p>

            <p>
              Na oficina, mecânica, programação, elétrica, estratégia e
              comunicação trabalham como um único sistema. Na arena,
              cada decisão é resultado de meses de projeto, teste e
              colaboração.
            </p>

            <div className="identity-list">
              <span>
                <b>BASE</b>
                SENAI Lucas do Rio Verde
              </span>

              <span>
                <b>CIDADE</b>
                Lucas do Rio Verde · MT
              </span>

              <span>
                <b>ESTREIA</b>
                Temporada 2025
              </span>
            </div>
          </div>
        </section>

        <section className="robot section-dark" id="robo">
          <div className="robot-title">
            <p className="kicker">MÁQUINA 2026</p>

            <h2>
              Dual
              <br />
              <em>Fire</em>
            </h2>

            <p>
              Até 56 kg de engenharia construída para pontuar em alta
              velocidade e atuar em múltiplas frentes.
            </p>
          </div>

          <button
            className="featured-photo"
            onClick={() => setActivePhoto(1)}
            aria-label="Ampliar foto do mecanismo do Dual Fire"
          >
            <img
              src="./assets/robot-competition-02.jpg"
              alt="Mecanismo de coleta do Dual Fire"
            />

            <span>02 / DETALHE DO ROBÔ</span>
          </button>

          <div className="robot-specs">
            <article>
              <span>01</span>
              <h3>Velocidade</h3>

              <p>
                Movimentação rápida para ciclos curtos e maior presença
                em campo.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Dupla atuação</h3>

              <p>
                O nome Dual Fire traduz a capacidade de pontuar em mais
                de uma frente.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Resposta</h3>

              <p>
                Mecanismos integrados, testados para reagir ao ritmo
                intenso de uma partida FRC.
              </p>
            </article>
          </div>
        </section>

        <section className="gallery section">
          <div className="gallery-copy">
            <p className="kicker">DENTRO DA ARENA</p>

            <h2>Onde o projeto encontra a realidade.</h2>

            <p>
              Registros do Dual Fire durante o REBUILT™, desafio oficial
              da FIRST Robotics Competition em 2026.
            </p>
          </div>

          <div className="photo-grid">
            {photos.map((photo, index) => (
              <button
                className={`photo ${photo.className}`}
                key={photo.src}
                onClick={() => setActivePhoto(index)}
                aria-label={`Ampliar foto: ${photo.label}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                />

                <span>
                  <b>0{index + 1}</b>
                  {photo.label}
                </span>
              </button>
            ))}
          </div>

          <p className="photo-credit">
            Imagens publicadas pela equipe no The Blue Alliance.
          </p>
        </section>

        <section
          className="season section-dark"
          id="temporada"
        >
          <div className="section-number">02</div>

          <div className="section-heading">
            <p className="kicker">TEMPORADA 2026</p>

            <h2>
              Do workshop
              <br />
              ao playoff.
            </h2>
          </div>

          <div className="timeline">
            {seasonFacts.map(([tag, title, text], index) => (
              <article key={title}>
                <div className="timeline-dot">
                  <span>0{index + 1}</span>
                </div>

                <div>
                  <small>{tag}</small>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="people section"
          id="integrantes"
        >
          <div className="people-head">
            <div>
              <p className="kicker">QUEM FAZ ACONTECER</p>

              <h2>
                13 integrantes.
                <br />
                Um só time.
              </h2>
            </div>

            <p>
              Projetar um robô é trabalho de muita gente. Cada
              integrante participa do processo, aprende na prática e
              deixa sua marca na temporada.
            </p>
          </div>

          <div className="members-grid">
            {members.map(([name, role], index) => (
              <article key={`${name}-${index}`}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className="member-monogram"
                  aria-hidden="true"
                >
                  {name
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("")}
                </div>

                <h3>{name}</h3>
                <p>{role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="impact section-dark">
          <div className="impact-media">
            <img
                src="./assets/equipe-luver-control-real.jpg"
              alt="Integrantes da Luver Control reunidos no estande da equipe"
            />
          </div>

          <div className="impact-copy">
            <p className="kicker">MUITO ALÉM DO ROBÔ</p>

            <h2>Tecnologia que inspira novas trajetórias.</h2>

            <p>
              A Luver Control leva a robótica para fora da oficina. Em
              2026, apresentou o Dual Fire no Show Safra Educação e
              aproximou famílias, estudantes e produtores da engenharia
              feita por jovens da própria cidade.
            </p>

            <a
              className="button primary"
              href="https://senaimt.ind.br/noticias/6182/luver-control-leva-robotica-de-ponta-ao-show-safra-e-inspira-nova-geracao-em-lucas"
              target="_blank"
              rel="noreferrer"
            >
              Leia a reportagem
              <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="cta">
          <div>
            <p className="kicker">ACOMPANHE A EQUIPE</p>

            <h2>
              O próximo capítulo
              <br />
              já está em construção.
            </h2>
          </div>

          <div className="cta-links">
            <a
              href="https://www.instagram.com/luvercontrol/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Instagram</span>
              <ArrowIcon />
            </a>

            <a
              href="https://www.thebluealliance.com/team/10298"
              target="_blank"
              rel="noreferrer"
            >
              <span>The Blue Alliance</span>
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span className="wordmark-mark">LC</span>

          <span>
            LUVER
            <strong>CONTROL</strong>
          </span>
        </div>

        <p>FRC TEAM 10298 · LUCAS DO RIO VERDE, MT</p>
        <p>Dados esportivos: The Blue Alliance / FIRST.</p>
      </footer>

      {activePhoto !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          onClick={() => setActivePhoto(null)}
        >
          <button
            onClick={() => setActivePhoto(null)}
            aria-label="Fechar foto"
          >
            ×
          </button>

          <img
            src={photos[activePhoto].src}
            alt={photos[activePhoto].alt}
            onClick={(event) => event.stopPropagation()}
          />

          <p>
            {photos[activePhoto].label} · LUVER CONTROL 10298
          </p>
        </div>
      )}
    </>
  );
}