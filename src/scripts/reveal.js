const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealElements = [...document.querySelectorAll("[data-reveal]")];

if (prefersReducedMotion) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const delay = Number(element.getAttribute("data-delay") || 0);

        window.setTimeout(() => {
          element.classList.add("is-visible");
        }, delay);

        observer.unobserve(element);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

const attachCarouselControls = () => {
  const carousels = document.querySelectorAll("[data-carousel]");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector("[data-carousel-track]");
    const previous = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");

    if (!track || !previous || !next) return;

    const loopCount = Number.parseInt(carousel.getAttribute("data-carousel-loop") || "0", 10);

    const getCardSpan = () => {
      const firstCard = track.firstElementChild;

      if (!(firstCard instanceof HTMLElement)) {
        return Math.min(track.clientWidth * 0.82, 420);
      }

      const cardWidth = firstCard.getBoundingClientRect().width;
      const trackStyles = window.getComputedStyle(track);
      const gap = Number.parseFloat(trackStyles.columnGap || trackStyles.gap || "0");

      return cardWidth + gap;
    };

    if (loopCount > 0) {
      let isAnimating = false;
      const durationMs = 360;

      const resetScroll = (position) => {
        const previousBehavior = track.style.scrollBehavior;
        track.style.scrollBehavior = "auto";
        track.scrollLeft = position;
        track.style.scrollBehavior = previousBehavior;
      };

      resetScroll(0);

      next.addEventListener("click", () => {
        if (isAnimating) return;

        isAnimating = true;
        const span = getCardSpan();

        track.scrollBy({ left: span, behavior: "smooth" });

        window.setTimeout(() => {
          const firstCard = track.firstElementChild;

          if (firstCard) {
            track.appendChild(firstCard);
          }

          resetScroll(0);
          isAnimating = false;
        }, durationMs);
      });

      previous.addEventListener("click", () => {
        if (isAnimating) return;

        isAnimating = true;
        const span = getCardSpan();
        const lastCard = track.lastElementChild;

        if (lastCard) {
          track.insertBefore(lastCard, track.firstChild);
        }

        resetScroll(span);
        track.scrollBy({ left: -span, behavior: "smooth" });

        window.setTimeout(() => {
          resetScroll(0);
          isAnimating = false;
        }, durationMs);
      });

      return;
    }

    const step = () => {
      return getCardSpan();
    };

    previous.addEventListener("click", () => {
      track.scrollBy({ left: -step(), behavior: "smooth" });
    });

    next.addEventListener("click", () => {
      track.scrollBy({ left: step(), behavior: "smooth" });
    });
  });
};

const closeMobileMenuOnNavigate = () => {
  const menu = document.querySelector(".mobile-nav");
  if (!(menu instanceof HTMLDetailsElement)) return;

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.removeAttribute("open");
    });
  });
};

const attachTopicSlider = () => {
  const slider = document.querySelector("[data-topic-slider]");
  if (!(slider instanceof HTMLElement)) return;

  const track = slider.querySelector("[data-topic-track]");
  const previous = slider.querySelector("[data-topic-prev]");
  const next = slider.querySelector("[data-topic-next]");
  const items = [...slider.querySelectorAll("[data-topic-item]")];
  const bullets = [...slider.querySelectorAll("[data-topic-bullet]")];
  const panelsRoot = slider.parentElement;
  const panels = panelsRoot ? [...panelsRoot.querySelectorAll("[data-topic-panel]")] : [];
  const showcase = panelsRoot ? panelsRoot.querySelector(".solutions-showcase") : null;

  if (
    !(track instanceof HTMLElement) ||
    !(previous instanceof HTMLButtonElement) ||
    !(next instanceof HTMLButtonElement) ||
    items.length === 0
  ) {
    return;
  }

  let activeIndex = -1;
  let isAnimating = false;
  const durationMs = 360;

  const getSpan = () => {
    const first = track.firstElementChild;

    if (!(first instanceof HTMLElement)) return 0;

    return first.getBoundingClientRect().width;
  };

  const syncActiveState = () => {
    const domItems = [...slider.querySelectorAll("[data-topic-item]")];

    domItems.forEach((item) => {
      const index = Number.parseInt(item.getAttribute("data-topic-index") || "-1", 10);
      const isActive = activeIndex >= 0 && index === activeIndex;

      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    bullets.forEach((bullet) => {
      const index = Number.parseInt(bullet.getAttribute("data-topic-index") || "-1", 10);
      const isActive = activeIndex >= 0 && index === activeIndex;

      bullet.classList.toggle("is-active", isActive);
      bullet.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    panels.forEach((panel) => {
      const index = Number.parseInt(panel.getAttribute("data-topic-index") || "-1", 10);
      panel.classList.toggle("is-active", activeIndex >= 0 && index === activeIndex);
    });

    if (showcase instanceof HTMLElement) {
      showcase.classList.toggle("has-active", activeIndex >= 0);
    }
  };

  const jumpToStart = (position = 0) => {
    const previousBehavior = track.style.scrollBehavior;
    track.style.scrollBehavior = "auto";
    track.scrollLeft = position;
    track.style.scrollBehavior = previousBehavior;
  };

  const rotateNext = () => {
    if (isAnimating) return;

    isAnimating = true;
    const span = getSpan();
    track.scrollBy({ left: span, behavior: "smooth" });

    window.setTimeout(() => {
      const first = track.firstElementChild;

      if (first) {
        track.appendChild(first);
      }

      jumpToStart(0);
      isAnimating = false;
    }, durationMs);
  };

  const rotatePrevious = () => {
    if (isAnimating) return;

    isAnimating = true;
    const span = getSpan();
    const last = track.lastElementChild;

    if (last) {
      track.insertBefore(last, track.firstChild);
    }

    jumpToStart(span);
    track.scrollBy({ left: -span, behavior: "smooth" });

    window.setTimeout(() => {
      jumpToStart(0);
      isAnimating = false;
    }, durationMs);
  };

  previous.addEventListener("click", rotatePrevious);
  next.addEventListener("click", rotateNext);

  items.forEach((item) => {
    item.addEventListener("click", () => {
      activeIndex = Number.parseInt(item.getAttribute("data-topic-index") || "0", 10);
      syncActiveState();
    });
  });

  bullets.forEach((bullet) => {
    bullet.addEventListener("click", () => {
      const targetIndex = Number.parseInt(bullet.getAttribute("data-topic-index") || "0", 10);
      const currentDomItems = [...slider.querySelectorAll("[data-topic-item]")];
      const currentFirst = Number.parseInt(currentDomItems[0]?.getAttribute("data-topic-index") || "0", 10);
      const forwardSteps = (targetIndex - currentFirst + items.length) % items.length;
      const backwardSteps = (currentFirst - targetIndex + items.length) % items.length;
      const direction = forwardSteps <= backwardSteps ? "next" : "prev";
      const steps = direction === "next" ? forwardSteps : backwardSteps;

      if (steps === 0) {
        return;
      }

      let completed = 0;
      const advance = () => {
        if (completed >= steps) return;

        completed += 1;
        if (direction === "next") {
          rotateNext();
        } else {
          rotatePrevious();
        }

        if (completed < steps) {
          window.setTimeout(advance, durationMs + 30);
        }
      };

      advance();
    });
  });

  syncActiveState();
};

attachCarouselControls();
closeMobileMenuOnNavigate();
attachTopicSlider();
