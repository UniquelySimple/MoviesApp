export class Movies {
    id?: any;
    title?: string;
    poster?: string;
    desc?: string;
    year?: number;
    rating?: number;
}

// the model we have in backend(Django) is
// class Movie(models.Model):
//     title = models.CharField(max_length=32)
//     poster = models.CharField(max_length=256)
//     desc = models.CharField(max_length=656)
//     year = models.IntegerField()
//     rating = models.IntegerField()