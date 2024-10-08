import { inject } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { CanActivateFn, Router } from "@angular/router";
import { map, take } from "rxjs";

export const authGuard: CanActivateFn = () => {
  const afAuth: AngularFireAuth = inject(AngularFireAuth);
  const router: Router = inject(Router);
  return afAuth.authState.pipe(
    take(1),
    map((user) => {
      if (user) {
        // console.log("user is logged in ", user);
        return true;
      }
      router.navigate(["/login"]);
      return false;
    }),
  );
};
