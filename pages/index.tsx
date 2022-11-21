import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../components/inputs/button";
import TextField from "../components/inputs/TextField";
import Loading from "../components/loading";
import encryption from "../utils/encription";
import validator from "../utils/validator";
import { api, l_storage, path } from "./api/service";


export default function PandaMarsCMS() {
  const [user, setUser] = useState({ email: "", password: "", invalidEmail: false, signingIn: false })
  const router = useRouter()

  const onEmailChange = (email: string) => {
    const validEmail = validator.validateEmail(email)
    setUser({ ...user, email: email, invalidEmail: !validEmail })
  }

  const submit = () => {
    setUser({ ...user, signingIn: true })
    api.signin({ email: user.email, password: user.password, userRole: 'admin' }, path.signin)
      .then(res => {
        setUser({ ...user, signingIn: false })
        l_storage.save(encryption.encrypt(res?.data.token), 'token')
        router.reload()
      })
      .catch(err => {
        setUser({ ...user, signingIn: false })
      })
  }

  return <div>
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
      <div className="flex shadow-md">

        <div className="flex flex-wrap content-center justify-center rounded-r-md w-[24rem] h-full">
          <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-l-md"
            src="https://i.imgur.com/9l1A4OS.jpeg" />
        </div>
        <div className="flex flex-wrap content-center justify-center rounded-r-md bg-white w-[24rem] h-[32rem] " >
          <div className="w-72">

            <h1 className="text-xl font-semibold">Welcome back</h1>
            <small className="text-gray-400">Welcome back! Please enter your details</small>


            <div className="mt-4">
              <div className="mb-3">
                <TextField placeholder="Enter your email" label="Email" type="email"
                  onchange={e => onEmailChange(e)}
                  error={user.invalidEmail}
                />
              </div>

              <div className="mb-3">
                <TextField placeholder="Enter your password" label="Password" type="password"
                  onchange={e => setUser({ ...user, password: e })}
                />
              </div>

              <div className="mb-3 flex flex-wrap content-center">
                <input id="remember" type="checkbox" className="mr-1 checked:bg-blue-700" />
                <label htmlFor="remember" className="mr-auto text-xs font-semibold">Remember for 30 days</label>
                <Link href="/forgot-password" className="text-xs font-semibold text-blue-700">Forgot password?</Link>
              </div>

              <div className="mb-3">
                {user.signingIn ? <div className="flex justify-center">
                  <Loading />
                </div> :
                  user.invalidEmail || user.email === "" || user.password === "" ?
                    <Button label='Sign in' disabled onclick={() => { }} /> : <Button label='Sign in' onclick={submit} />
                }
              </div>
            </div>
            <div className="text-center">
              <span className="text-xs text-gray-400 font-semibold">Don't have account?</span>
              <a href="#" className="text-xs font-semibold text-blue-700 pl-2">Sign up</a>
            </div>
          </div>
        </div>




      </div>

      <div className="mt-3 w-full">
        <p className="text-center">
          Made by
          <Link target="_blank"
            href="https://techethio.com" className="text-blue-700 pl-1">TechEthio IT Solution PLC</Link>
        </p>
      </div>
    </div>
  </div>
}