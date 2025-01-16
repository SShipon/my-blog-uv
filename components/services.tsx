import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb, Zap, Shield } from 'lucide-react'

const services = [
  {
    title: 'Innovative Solutions',
    description: 'Cutting-edge technology to solve your business challenges.',
    icon: Lightbulb,
  },
  {
    title: 'Lightning Fast',
    description: 'Optimized for speed and efficiency to save you time.',
    icon: Zap,
  },
  {
    title: 'Secure & Reliable',
    description: 'Your data is safe with our top-notch security measures.',
    icon: Shield,
  },
]

export default function Services() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-muted-foreground">Discover what we can do for you</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="h-8 w-8 text-primary" />
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

