export function index ({request, response, database}) {
    const { status } = request.papoi

    const filters = status ? { status } : null
    
    const tickets = database.select("tickets")

    return response.end(JSON.stringify(tickets))
}