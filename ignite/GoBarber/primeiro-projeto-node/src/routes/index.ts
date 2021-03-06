import { Router } from "express";

const routes = Router();

routes.get('/', (request, response) => {
	return response.json({ message: "Hello World I'm here" });
});

routes.post('/users', (request, response) => {
	const { name, email } = request.body;

	const user = {
		name,
		email,
	};
	return response.json(user);
});

export default routes;
