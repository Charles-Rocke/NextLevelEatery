import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/backend/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>

        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.name}>
        {/* suspense is used to show default loading */}
        <Suspense
          fallback={<p className={classes.loading}>Loading meals...</p>}
        >
          {/* outsourced the loading to another component in this file vs the whole component loading */}
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

export default MealsPage;
// comment
