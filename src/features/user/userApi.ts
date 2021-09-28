// A mock function to mimic making an async request for data
// @ts-ignore
export function signup({ firstName, lastName, email, password }) {
    return new Promise<{ data: any, status: number }>((resolve) =>
        setTimeout(() => resolve({
            data: { firstName, lastName, email, token:'token:12345'  },
            status: 200
        }), 500)
    );
}
