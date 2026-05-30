"use client";

import Link from "next/link";
import { useState } from "react";
import { DailyCard } from "@/components/Cards";
import Modal from "@/components/Modal";
import { DailyModalContent } from "@/components/ModalContent";
import SiteShell from "@/components/SiteShell";
import { dailyWorks } from "@/lib/data";

export default function DailyPage() {
  const [selected, setSelected] = useState(null);

  return (
    <SiteShell>
      <main>
        <div className="container section">
          <h2>Daily Works - Each Door Unique</h2>
          <div className="daily-grid">
            {dailyWorks.map((work) => (
              <DailyCard key={work.id} work={work} onClick={() => setSelected(work)} />
            ))}
          </div>
          <Link href="/" className="back-link" style={{ marginTop: "1.5rem" }}>
            <i className="fas fa-arrow-left" /> Back to Home
          </Link>
        </div>
      </main>
      <Modal onClose={() => setSelected(null)}>{selected ? <DailyModalContent work={selected} /> : null}</Modal>
    </SiteShell>
  );
}
