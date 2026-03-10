export const openapi = {
    openapi: "3.0.0",
    info: {
        title: "My API",
        description: "Description of my API",
        version: "1.0.0",
    },
    servers: [
        {
            url: "http://localhost:3000",
        },
    ],
    paths: {
        "/users": {
            get: {
                summary: "Get all users",
                responses: {
                    "200": {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/User",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    }
};
//# sourceMappingURL=openapispec.js.map