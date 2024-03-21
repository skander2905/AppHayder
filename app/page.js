import Image from "next/image";
import styles from "./page.module.css";
import { SignIn } from "@clerk/nextjs";
import './page.css'

export default function Home() {
  return (
    <div className="signin"><SignIn redirectUrl="/dashboard" /></div>
  );
}
