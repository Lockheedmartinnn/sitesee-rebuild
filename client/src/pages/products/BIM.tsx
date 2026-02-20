import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function BIM() {
  return (
    <div className="container py-24">
      <h1 className="text-4xl font-bold mb-6">BIM - Building Information Modeling</h1>
      <p className="text-lg text-slate-600 mb-8">
        This is the placeholder page for BIM. Content will be added soon.
      </p>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}
