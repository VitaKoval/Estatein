
import { SectionContainer } from "@/ui";
import Image from "next/image";
import styles from "./page.module.css";
import logo from '../public/logo.png'

export default function Home() {
  console.log(styles.main);
  return (
   
     
    <main className={styles.main}>
      <section className={styles.section__intro}>
        <SectionContainer>
          <div className={styles.intro__wrap}> 
            <div className={styles.intro__content}>
              <div class="content__text">
                <h1>Discover Your Dream Property with Estatein</h1>
                <p>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
              </div>
              <div class="content__actions">
                <button class="btn btn__primary btn--with-arrow">Learn More</button>
                <button class="btn btn__primary btn--with-arrow">Browse Properties</button>
              </div>
              <div>
                Some analytics!
              </div>
            </div>
            <div className={styles.intro__image}>
                <Image src={logo} alt='Logo Estatein' />
            </div>

          </div>
        </SectionContainer>
      </section>
      </main>

    
  );
}
