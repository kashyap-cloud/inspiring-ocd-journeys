import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Story {
  name: string;
  profession: string;
  struggled: string;
  managed: string;
}

const stories: Story[] = [
  {
    name: "Howie Mandel",
    profession: "Comedian & TV Host",
    struggled:
      "Severe contamination OCD. Howie has spoken about intense fear of germs, avoiding handshakes, and experiencing overwhelming anxiety about illness.",
    managed:
      "He sought professional help, including therapy and medication. Instead of trying to eliminate anxiety completely, he learned to tolerate discomfort and function despite it. By being open about his condition, he also reduced shame — which is often a major part of OCD. Today, he continues to manage symptoms while maintaining a high-profile career.",
  },
  {
    name: "Lena Dunham",
    profession: "Actress, Writer & Director",
    struggled:
      "Intrusive thoughts and compulsive rituals from a young age. She has described repetitive behaviors and distressing thoughts that felt uncontrollable.",
    managed:
      "Through therapy, especially CBT-based treatment, she learned that thoughts are not dangerous and do not reflect character. Over time, she reduced compulsions and stopped seeking reassurance. She often emphasizes early intervention and speaking openly about mental health.",
  },
  {
    name: "David Beckham",
    profession: "Professional Footballer",
    struggled:
      "Obsessive need for order and symmetry. He has shared that he feels uncomfortable if items are not arranged perfectly and has reorganized spaces repeatedly to reduce anxiety.",
    managed:
      "By becoming aware of these tendencies and setting boundaries around them. Instead of letting the urge take over his time and energy, he learned to channel his focus into discipline in sports while preventing compulsive behaviors from interfering with daily life.",
  },
  {
    name: "Marc Summers",
    profession: "Television Host",
    struggled:
      "Severe contamination OCD that affected his career and relationships. He avoided physical contact and feared germs intensely.",
    managed:
      "He underwent structured treatment, including therapy focused on gradually facing feared situations. Over time, exposure reduced his anxiety response. He later spoke publicly and even produced content about OCD, helping others feel less alone.",
  },
  {
    name: "Cameron Diaz",
    profession: "Actress",
    struggled:
      "Obsessive concerns about cleanliness and germs. She has spoken about excessive hand washing and being highly cautious about touching public surfaces.",
    managed:
      "Through increased awareness and learning to moderate compulsive behaviors. By addressing anxiety directly rather than feeding it with rituals, she reduced the intensity of symptoms and prevented them from escalating.",
  },
];

const cardAccents = [
  "from-primary/20 to-secondary",
  "from-accent/20 to-secondary",
  "from-primary/30 to-primary/5",
  "from-accent/30 to-accent/5",
  "from-primary/15 to-accent/10",
];

const Index = () => {
  const [current, setCurrent] = useState(0);
  const isLast = current === stories.length - 1;

  const next = () => setCurrent((c) => Math.min(c + 1, stories.length - 1));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const goFirst = () => setCurrent(0);

  const story = stories[current];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-8">
      <h1 className="mb-2 text-center font-serif text-3xl font-bold text-foreground tracking-tight md:text-4xl">
        OCD Success Stories
      </h1>
      <p className="mb-8 text-center text-sm text-muted-foreground">
        Swipe through inspiring journeys — {current + 1} of {stories.length}
      </p>

      <div className="relative w-full max-w-lg">
        <div
          className={`rounded-2xl bg-gradient-to-br ${cardAccents[current]} border border-border p-6 shadow-lg transition-all duration-300 md:p-8`}
        >
          {/* Header */}
          <div className="mb-5 border-b border-border pb-4">
            <h2 className="text-2xl font-bold text-foreground">{story.name}</h2>
            <span className="mt-1 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
              {story.profession}
            </span>
          </div>

          {/* Content */}
          <div className="space-y-4 text-sm leading-relaxed text-foreground/85">
            <div>
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                What they struggled with
              </h3>
              <p>{story.struggled}</p>
            </div>
            <div>
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                How they managed it
              </h3>
              <p>{story.managed}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-between">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              disabled={current === 0}
              className="h-10 w-10 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-1.5">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-primary"
                      : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            {isLast ? (
              <Button
                variant="outline"
                size="icon"
                onClick={goFirst}
                className="h-10 w-10 rounded-full"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="h-10 w-10 rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
