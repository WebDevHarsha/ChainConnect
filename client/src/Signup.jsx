import React from 'react'

function Signup() {
  return (
      <div className="bg-black text-white">
        <div
          dir="ltr"
          data-orientation="horizontal"
          className="w-full max-w-md mx-auto mt-10"
        >
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="h-9 items-center rounded-lg p-1 text-muted-foreground flex justify-center gap-4 mb-8 bg-gray-500"
            tabIndex={0}
            data-orientation="horizontal"
            style={{ outline: "none" }}
          >
            <button
              type="button"
              role="tab"
              aria-selected="true"
              aria-controls="radix-:r2b:-content-login"
              data-state="active"
              id="radix-:r2b:-trigger-login"
              className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow px-4 py-2 rounded-md text-lg font-semibold bg-gray-200 text-black"
              tabIndex={-1}
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Login
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-controls="radix-:r2b:-content-signup"
              data-state="inactive"
              id="radix-:r2b:-trigger-signup"
              className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow px-4 py-2 rounded-md text-lg font-semibold bg-gray-200 text-black"
              tabIndex={-1}
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Sign Up
            </button>
          </div>
          <div
            data-state="active"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r2b:-trigger-login"
            id="radix-:r2b:-content-login"
            tabIndex={0}
            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            style={{ animationDuration: "0s" }}
          >
            <div
              className="rounded-lg border shadow-sm bg-gray-900 text-white"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                  Login
                </h3>
                <p className="text-sm text-muted-foreground">
                  Enter your credentials to login.
                </p>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="login-email"
                  >
                    Email
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="login-email"
                    placeholder="Enter your email"
                    required=""
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="login-password"
                  >
                    Password
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="login-password"
                    placeholder="Enter your password"
                    required=""
                    type="password"
                  />
                </div>
                <div className="text-right">
                  <a className="text-sm underline text-gray-500" href="#">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="flex items-center p-6">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-black">
                  Login
                </button>
              </div>
            </div>
          </div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r2b:-trigger-signup"
            hidden=""
            id="radix-:r2b:-content-signup"
            tabIndex={0}
            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
      </div>
  )
}

export default Signup