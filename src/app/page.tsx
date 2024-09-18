import { JsonBuilder } from "./jsonbuilder";
import { Navigation } from "./navigation";

export default function Home() {
  return (
    <div className="flex h-full md:h-screen bg-gray-900 p-4 items-center">
      <Navigation/>
      <JsonBuilder/>
    </div>
  )
}
