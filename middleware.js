import { NextResponse } from "next/server"
import { client_routes } from "./lib/helpers"

const url = "https://talknow.vercel.app"

export async function middleware(req, res) {

    const path = req.nextUrl.pathname

    const user = req.cookies.get("user")?.value

    const isAllow = user && (path === client_routes.login || path === client_routes.register || path === "/")

    if (isAllow) {
        return NextResponse.redirect(url + client_routes.discover)
    }

    if (!user && (
        path === client_routes.chat ||
        path === client_routes.search ||
        path === client_routes.profile ||
        path === client_routes.discover ||
        path === client_routes.edit_profile
    )) {
        return NextResponse.redirect(url + client_routes.login)
    }

}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
