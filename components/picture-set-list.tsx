import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PictureSetListProps {
  pictureSets: PictureSet[]
}

export function PictureSetList({ pictureSets }: PictureSetListProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Uploaded Picture Sets</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pictureSets.map((set) => (
          <Card key={set.id}>
            <CardHeader>
              <CardTitle>{set.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {set.cover && (
                <div className="relative w-full h-48 mb-4">
                  <Image src={set.cover || "/placeholder.svg"} alt={set.title} fill className="object-cover rounded" />
                </div>
              )}
              <p className="text-sm text-gray-500">{set.subtitle}</p>
              <p className="mt-2">{set.description}</p>
              <p className="mt-2 text-sm text-gray-500">{set.pictures.length} pictures</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

