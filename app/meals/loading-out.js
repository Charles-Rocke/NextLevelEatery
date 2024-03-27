import classes from "./loading.module.css";
// took this file out of use, but this is another way of creating a default loading page
function MealsLoadingPage() {
  return <p className={classes.loading}>Loading meals...</p>;
}

export default MealsLoadingPage;
