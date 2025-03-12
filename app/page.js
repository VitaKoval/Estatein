import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="main">
    
      <h1>Home Page</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "32px" }}>
        <Link href='/meals'>Meals Link</Link>
        <Link href='/community'>Community Link</Link>
      </div>
       
      </main>
  );
}
