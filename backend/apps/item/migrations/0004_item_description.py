# Generated by Django 3.2.4 on 2021-09-22 23:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('item', '0003_alter_item_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='description',
            field=models.CharField(blank=True, db_index=True, max_length=200, null=True, verbose_name='Description'),
        ),
    ]
