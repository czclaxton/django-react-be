# Generated by Django 3.0.2 on 2020-01-09 23:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('game', '0003_auto_20200108_1902'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='game', to=settings.AUTH_USER_MODEL),
        ),
    ]
