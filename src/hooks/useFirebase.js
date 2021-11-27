import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);
    const auth = getAuth();
    const [admin, setAdmin] = useState(false);
    
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider);
       
        //  .finally(() => setLoading(false));
    }

    //observe user state change
    useEffect(() => {
       const unsubscribed = onAuthStateChanged(auth, user =>{
           if(user){
               setUser(user);
           }
           else{
               setUser({})
           }
           setLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    const registerWithEmail = (name, email, password, history) => {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          const newUser = { email, displayName: name };
          setUser(newUser);
          saveUser(email, name);
          updateProfile(auth.currentUser, {
            displayName: name,
          });
          history.replace("/");
        })
        .catch((error) => {
        })
        .finally(setLoading(false));
      };
    


// check if a user admin or not
  useEffect(() => {
    fetch(`https://fast-escarpment-65157.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

      const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch("https://fast-escarpment-65157.herokuapp.com/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        });
      };


      const loginWithEmail = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            const destination = location?.state?.from || "/";
            history.replace(destination);
            setUser(result.user);
          })
          .catch((error) => {
          })
          .finally(setLoading(false));
      };

    const logOut = () => {
        setLoading(true);
        signOut(auth)
        .then(() => { })
        .finally(() => setLoading(false)); 
    }
    return{
        user,
        isLoading,
        signInUsingGoogle,
        loginWithEmail,
        registerWithEmail,
        logOut,
        admin
    }
}
export default useFirebase;

