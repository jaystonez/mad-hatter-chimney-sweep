// @ts-nocheck
import { CheckCircle, Clock, Award, Heart } from "lucide-react"
import Image from "next/image"

const WHY_IMAGE_SRC = process.env.NEXT_PUBLIC_WHY_IMAGE_URL ||
  "/images/herringbone-victorian.jpg"

const reasons = [
  {
    icon: CheckCircle,
    title: "Certified Professionals",
    description: "Our team is fully trained, certified, and stays current with the latest industry standards and safety protocols.",
  },
  {
    icon: Clock,
    title: "Prompt & Reliable",
    description: "We respect your time. Count on us to arrive on schedule and complete work efficiently without cutting corners.",
  },
  {
    icon: Award,
    title: "Quality Workmanship",
    description: "We take pride in our work and stand behind it with comprehensive warranties and a satisfaction guarantee.",
  },
  {
    icon: Heart,
    title: "Customer-Focused",
    description: "Your safety and satisfaction are our top priorities. We treat every home as if it were our own.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose The Mad Hatter Chimney Sweep?
            </h2>
            <p className="text-muted-foreground mb-8">
              Since 1979, we&apos;ve served over 2,500 satisfied customers throughout Greater Seattle.
              We&apos;ve built our reputation on trust, quality, and exceptional service. When you
              choose us, you&apos;re choosing peace of mind backed by 45+ years of expertise.
            </p>
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Content - Stats & Image */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={WHY_IMAGE_SRC}
                alt="Experienced chimney sweep professional inspecting fireplace with safety equipment and tools"
                width={1200}
                height={1600}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-xl">
                <div className="text-2xl font-bold text-primary">2,500+</div>
                <div className="text-xs text-muted-foreground mt-1">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-xl">
                <div className="text-2xl font-bold text-primary">45+</div>
                <div className="text-xs text-muted-foreground mt-1">Years Since 1979</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-xl">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground mt-1">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
