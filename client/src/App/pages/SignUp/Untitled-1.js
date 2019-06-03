<Typography component="h1" variant="h5">
                    Find Your Dog!
                </Typography>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="name">Pet Name</InputLabel>
                        < Input id = "name"
                        type = "text"
                        name = "name"
                        autoComplete = "off"
                        autoFocus onChange = {
                          this.handleChange
                        }
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="type">Type</InputLabel>
                        < Input id = "email"
                        type = "text"
                        name = "type"
                        autoComplete = "off"
                        onChange = {
                          this.handleChange
                        }
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="message">Message</InputLabel>
                        < Input name = "message"
                        type = "text"
                        id = "password"
                        autoComplete = "off"
                        onChange = {
                          this.handleChange
                        }
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="contact">Contact Info</InputLabel>
                        < Input name = "contact"
                        type = "text"
                        id = "contact"
                        autoComplete = "off"
                        onChange = {
                          this.handleChange
                        }
                        />
                    </FormControl>

                    <Button
                    type = "submit"
                    fullWidth
                    variant = "contained"
                    color = "primary"
                    onClick = { this.handleSubmit }
                    className = { classes.submit }>
                      Submit Pet!
                      </Button>



GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import tileData




import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';





div>
            <div> 
              <Typography component="h1">Let us know if you have seen some animals</Typography>
                {comments ? comments.map(comment => <Comment comment={comment}></Comment>) : 'no comments yet'}
            </div>
            <form class={classes.form}></form>
            <>Comment:
                <input type={message} onChange={handleMessage} />
            </form>

            <button onClick={() => addComment(message)}>
                Add Comment
            </button>
        </div>

        <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="comment">Comment</InputLabel>
                        <Input name="comment" type={message} id="comment" autoComplete="off" onChange={handleMessage}  />
                    </FormControl>