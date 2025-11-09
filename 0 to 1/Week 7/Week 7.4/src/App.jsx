/* eslint-disable no-unused-vars */
import { useMemo, useState } from 'react'
import './App.css'

import { RecoilRoot, useRecoilValue } from 'recoil'
import { JobsAtom, messagingAtom, networkAtom, notificationAtom } from '../Atoms'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp(){
  const networkNotification = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(JobsAtom)
  const Notification = useRecoilValue(notificationAtom)
  const messagingCount = useRecoilValue(messagingAtom)

  const totalNotificationCount = useMemo(() => {
    return networkNotification + Notification + jobsAtomCount + messagingCount
  },[networkNotification , Notification , jobsAtomCount , messagingCount]) 

  return (
    <>
      <button>Home</button>
      <button>My Network({networkNotification >= 100 ? "99+" : networkNotification})</button>
      <button>Messaging({messagingCount})</button>
      <button>Jobs({jobsAtomCount})</button>
      <button>Notification({Notification})</button>
      <button>Me({totalNotificationCount})</button>
    </>
  )
}

export default App
