
const TracksTable = () => {
    return (
    <table class="table table-hover table-dark" id="bootstrap-override">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Track</th>
        <th scope="col">Artist</th>
        <th scope="col">Genre</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">1</th>
        <td>Track 1</td>
        <td>Artist 1</td>
        <td>Genre 1</td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>Track 2</td>
        <td>Artist 2</td>
        <td>Genre 2</td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td colspan="2">track 3</td>
        <td>genre 3</td>
        </tr>
    </tbody>
    </table>
    )
}

export default TracksTable