export const ANONYMOUS_USERNAME = "anonymousUser";

type Gender = "MALE" | "FEMALE";

export interface User {
    email: string;
    workspaceIds: string[];
    username: string;
    name: string;
    gender: Gender;
    emptyInstance?: boolean;
    photoId?: string;
    isSuperUser: boolean;
    role?: string;
    proficiency?: string;
    useCase?: string;
    isConfigurable: boolean;
    enableTelemetry: boolean;
    adminSettingsVisible?: boolean;
    isAnonymous?: boolean;
    isIntercomConsentGiven?: boolean;
    emailVerified: boolean;
}

export interface UserApplication {
  id: string;
  name: string;
}

export const CurrentUserDetailsRequestPayload = {
  id: "profile",
};


export const DefaultCurrentUserDetails: User={
    name: ANONYMOUS_USERNAME,
    email: ANONYMOUS_USERNAME,
    workspaceIds: [],
    username: ANONYMOUS_USERNAME,
    gender: "MALE",
    isSuperUser: false,
    isConfigurable: false,
    enableTelemetry: false,
    adminSettingsVisible: false,
    isIntercomConsentGiven: false,
    emailVerified: false,

}