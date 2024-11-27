import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const PhotoCard = ({ photo, name, greeting, memory }) => (
    <Card
      sx={{
        maxWidth: 500,
        margin: '20px auto',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: 2,
      }}
    >
      {/* Display the photo */}
      <CardMedia
        component="img"
        image={photo}
        alt={`${name}'s Photo`}
        sx={{
            height: 'auto', // Allow image to maintain its aspect ratio
            maxHeight: 500, // Optional: Limit maximum height
            width: '100%', // Ensure it spans the full width of the card
            objectFit: 'contain', // Ensure the full image is visible
          }}
      />
      {/* Content */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          From: {name}
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ marginTop: '10px' }}>
          {greeting}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
          <strong>Memory:</strong> {memory}
        </Typography>
      </CardContent>
    </Card>
);


export default PhotoCard;
