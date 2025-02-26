interface Tag {
    text: string;
}
export interface User {
    tags: Tag[];
    accountType: 'Локальный' | 'LDAP';
    login: string;
    password: string | null;
}