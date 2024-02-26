'use client'

import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Detail({ params }) {
  const router = useRouter();

  return (
    <>
      <ArrowBackIcon
        className="m-4"
        onClick={() => router.back()}
      />

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>Product Detail: {params.slug}</div>
      </main>
    </>
  );
}
