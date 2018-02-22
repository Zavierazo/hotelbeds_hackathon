package com.hackathon.mapper;


import com.hackathon.model.HotelImagesEntity;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface HotelImagesMapper {

    @Select("SELECT * FROM HotelImages")
    List<HotelImagesEntity> selectAll();


    @Insert("INSERT INTO HotelImages (HotelCode, ImagePath, Tags) VALUES (#{hotelCode}, #{imagePath}, #{tags})")
    void insert(HotelImagesEntity entity);

    @Delete("DELETE FROM HotelImages WHERE HotelCode=#{hotelCode} AND ImagePath=#{imagePath}")
    void delete(HotelImagesEntity entity);

    @Update("UPDATE HotelImages SET Tags=#{tags} WHERE HotelCode=#{hotelCode} AND ImagePath =#{imagePath}")
    void update(HotelImagesEntity entity);
}
