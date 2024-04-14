import type { PortalWebAppConfig } from "./app.config";


export default defineNuxtSchema({
    appConfig: {
        portalWeb: {
            name: 'Portal Web'
        } as PortalWebAppConfig
    },
})