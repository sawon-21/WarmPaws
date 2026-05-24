import { useEffect, useMemo, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { auth, isFirebaseReady } from '../firebase/firebase.config.js'
import { AuthContext } from './authContext.js'
const googleProvider = new GoogleAuthProvider()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(isFirebaseReady)

  useEffect(() => {
    if (!auth) {
      return undefined
    }

    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
  }, [])

  const requireFirebase = () => {
    if (!auth) {
      return Promise.reject(new Error('Firebase is not configured'))
    }
    return null
  }

  const authInfo = useMemo(
    () => ({
      user,
      loading,
      createUser: (email, password) => requireFirebase() || createUserWithEmailAndPassword(auth, email, password),
      loginUser: (email, password) => requireFirebase() || signInWithEmailAndPassword(auth, email, password),
      googleLogin: () => requireFirebase() || signInWithPopup(auth, googleProvider),
      logoutUser: () => requireFirebase() || signOut(auth),
      resetPassword: (email) => requireFirebase() || sendPasswordResetEmail(auth, email),
      updateUserProfile: (profile) => requireFirebase() || updateProfile(auth.currentUser, profile),
    }),
    [user, loading],
  )

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
}
