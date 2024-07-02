// import { NextRequest, NextResponse } from "next/server"


// export function middleware(request: NextRequest): NextResponse {
//     console.log(request);

//     return NextResponse.redirect(new URL('/login', request.url));
// }


export { auth as middleware } from "@/lib/auth";

export const config = {
    matcher: ['/account']
}